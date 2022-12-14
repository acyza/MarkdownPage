import { ConfigTemplate } from "./config";
import { Axios } from 'axios';
import util from "./util";

export async function loadPage(config: ConfigTemplate, axios: Axios) {
  async function get(name: string){
    if (name == 'content') return '<div id="content"></div>'
    try {
      return (await axios.get(util.suffix(name,".html"))).data
    }catch(e){
      return ''
    }
  }

  async function analysis(data: string,get: (name: string) => Promise<string>) {
    const result = []
    const leftRegExp = /\{\{[^\{]/g,rightRegExp = /[^\}]\}\}/g
    while(true) {
      if(!leftRegExp.exec(data)) break
      result.push(data.substring(rightRegExp.lastIndex, leftRegExp.lastIndex - 3))
      rightRegExp.lastIndex = leftRegExp.lastIndex
      if(!rightRegExp.exec(data)) {
        console.log("解析错误")
        return `module analysis error`
      }
      result.push(
        await get(
          data.substring(leftRegExp.lastIndex - 1,rightRegExp.lastIndex - 2).trim()
        )
      )
    }
    result.push(data.substring(rightRegExp.lastIndex,data.length))
    return result.join('')
  }
  document.body.innerHTML =
    await analysis(config.template ? await get(config.template) : defaultTemplate,get)
}

export default loadPage;

const defaultTemplate = `{{content}}`