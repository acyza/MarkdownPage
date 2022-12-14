import { ConfigTemplate } from './config'
import { Axios } from 'axios'
import util from './util'
export function loadStyle(config: ConfigTemplate,axios: Axios){
  if(config.style)
    for(const url of config.style){
      const scriptDom = document.createElement('link')
      scriptDom.rel = "stylesheet"
      scriptDom.href = "./"+util.fillPath(util.suffix(url,".css"),axios.defaults.baseURL)
      document.head.appendChild(scriptDom)
    }
}
