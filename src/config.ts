export interface ConfigType {
    /**
     * 页面模板文件名
     * 位于page文件夹中后缀为.html
     * 文件名不需要后缀
     */
    template?: string,
    /**
     * 样式文件名
     * 位于style文件夹后缀.css
     * 文件名不需要后缀
     */
    styles?: string[],
    /**
     * js文件名
     * 位于javascript文件夹后缀.js
     * 文件名不需要后缀
     */
    javascript?: string[]
}

window.addEventListener('load',()=>
  fetch('config.json')
  .then((value) => {
    if(value.status == 200)
      return value.json()
    else
      throw `http status code = ${value.status}`
  })
  .then((value: ConfigType)=>{
    config(value)
  })
  .catch((e) => {
    console.error(`配置加载异常,加载默认配置\n${e}`)
    config({})
  })
)


import { loadPage } from './page'
import { load } from '.'

export async function config(config :ConfigType){
  await loadPage(config || {})
  load()
}
export default config