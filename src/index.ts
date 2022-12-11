import { marked } from 'marked'
import hljs from 'highlight.js'
import katex from 'katex'
import mlp from './global'
import 'highlight.js/styles/github.css'
import 'katex/dist/katex.css'

/**marked 通过组件使用 katex 显示数学公式 */
function mathExtension(level: 'block' | 'inline')
  :marked.MarkedExtension["extensions"] extends (infer R)[] ? R : any
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
          callback.error && callback.error();
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
      xhr.open('get', `/doc/${path}`)
      xhr.send()
    })
  }
})();

/**
 * 
 * @param {string} path markdown文件路径
 */
function renderMarkdown(path){
  requestMarkdown(path)
  .then((value) => content && (content.innerHTML = marked.parse(value)))
  .catch(console.log)
}

/**跳转 */
function go(path){
  if (/^https?:\/\//.test(path))open(path, '_blank')
  if(/.*[?,=].*/.test(path))throw 'path error'
  history.pushState(undefined , '', `?path=${path}`)
  reflush()
}
mlp.go = go

/**刷新页面 */
function reflush() {
  renderMarkdown(query.path || "README.md")
}

var title: HTMLTitleElement | undefined | null,content: HTMLElement | Element | undefined | null

import './config.ts'

export function load(){
  title = document.querySelector('title')
  content = document.querySelector('#content')
  reflush()
}

window.addEventListener('popstate',reflush)