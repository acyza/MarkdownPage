/**marked 已由cdn引入，此类型引入只做代码提示 */
import type { marked as _marked } from 'marked'
/**katex 已由cdn引入，此类型引入只做代码提示 */
import type _katex from 'katex'
import mlp from './global'
import util from './util'

/** cdn 引入 highlight.js 获取hljs */
const hljs = window["hljs"]
/** cdn 引入 katex 获取 katex */
const katex = window["ketex"] as typeof _katex
/** cdn引入marked 获取marked */
const marked = window["marked"] as typeof _marked

/**marked 通过组件使用 katex 显示数学公式 */
function mathExtension(level: 'block' | 'inline')
  :_marked.MarkedExtension["extensions"] extends (infer R)[] ? R : any
{
  const result = {
    name: `math_${level}`,
    level: level,
    start: (src) => src.indexOf(level == 'inline' ? '$':'$$'),
    tokenizer(src: string) {
      const match = src.match(level == "inline" ? /^\$+([^\$\n]+?)\$+/ : /^\$\$+([^\$\n]+?)\$\$+/);
      return match && {
        type: result.name,
        raw: match[0],
        text: match[1].trim()
      }
    },
    renderer: (token) =>
      `<p class=${result.name}>${katex.renderToString(token.text,{throwOnError: false})}</p>`
  }
  return result
}

/**配置link和katex */
marked.use({
  extensions: [mathExtension('inline'),mathExtension('block')],
  renderer:{
    link(href, title, text) {
      return `<a
        href="javascript:void(0)"
        onclick="mlp.go('${href}')"
        ${title ? `title=${title}`:''}
      >${text}</a>`
    },
    image(href, title, text) {
      return href === null ?
        text
        :`<img src="${util.fillPath(href,util.folder('./doc/' + mlp.current))}"
          ${title?`title=${title}`:''}
          />`
    }
  }
})

/** 配置代码高亮 */
marked.setOptions({
  highlight(code, lang, callback) {
    const result = hljs.highlight(code,{
      language: lang
    })
    if(callback)
      callback(result.errorRaised, result.value)
    return result.value
  }
})

/** 获取页面参数 (?key=value的value值) */
const query = new Proxy({} as {[key: string]: string},
{
  get(target,key:string){
    return decodeURI(location.search.replace(new RegExp(
        `^(?:.*[&//?]${encodeURI(key).replace(/[\.\+\*]/g,'\\$&')}(?:\\=([^&]*))?)?.*$`,
        'i'
      ),
      '$1'
      )
    )
  }
})

/**获取markdown文件的函数 */
const requestMarkdown = (() => {
  const xhr = new XMLHttpRequest()
  const callback:{success:Function,error?:Function} = {success:() => {}};
  xhr.onloadend = function() {
    if(this.readyState == 4) {
      switch(this.status) {
        case 200:
          callback.success && callback.success(this.responseText);
        break;
        default:
          callback.error && callback.error(this);
      }
      delete callback.error;
    }
  }
  xhr.onerror = (e) => callback.error && callback.error(e)
  /**
   * @param {string} path markdown文件路径
   */
  return (path) => {
    if(callback.error) {
      callback.error('reset');
      xhr.abort();
    }
    return new Promise<string>((success,err) => {
      callback.success = success;
      callback.error = err;
      xhr.open('get', `./doc/${path}`)
      xhr.send()
    })
  }
})();

/**
 * 
 * @param {string} path markdown文件路径
 */
function renderMarkdown(path){
  mlp.current = path
  mlp.status = 1
  window.dispatchEvent(new Event("loading"))
  requestMarkdown(path)
  .then((value) => {
    content && (content.innerHTML = marked.parse(value))
    mlp.status = 0
    mlp.title //刷新标题
    window.dispatchEvent(new Event("loaded"));
  })
  .catch((e)=>{
    console.error(e)
    mlp.status = 2
    window.dispatchEvent(new Event("loaderr"))
  })
}

/**跳转 */
function go(path){
  if (/^https?:\/\//.test(path)) return open(path, '_blank')
  if(/.*[?,=].*/.test(path))throw 'path error'
  if(path) path = util.fillPath(path,util.folder(mlp.current))
  else path = '/README.md'
  if(path == mlp.current) return
  history.pushState(undefined,'',`?path=${path}`)
  reflush()
}
mlp.go = go
mlp.home = () => go("/README.md")
mlp.reflush = reflush

/**刷新页面 */
function reflush() {
  renderMarkdown(query.path || "README.md")
}

var title: HTMLTitleElement | undefined | null,content: HTMLElement | Element | undefined | null

import './config.ts'

export function load(){
  title = document.querySelector('title')
  content = document.querySelector('#content')
  var _title = title.innerText = mlp.title
  Object.defineProperty(mlp,"title",{
    get(){
      return title.innerText = _title
      || `${content.querySelector('h1')?.innerText || 'document'}-doc`
    },
    set(value){
      _title = value
      mlp.title //刷新标题
    }
  })
  reflush()
}

window.addEventListener('popstate',reflush)