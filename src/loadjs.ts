import { ConfigTemplate } from './config'
import { Axios } from 'axios'
import util from './util'
export function loadJs(config: ConfigTemplate,axios: Axios){
  if(config.javascript)
    for(const name of config.javascript){
      const scriptDom = document.createElement('script')
      scriptDom.src = util.fillPath(util.suffix(name,".js"), axios.defaults.baseURL)
      document.head.appendChild(scriptDom)
    }
}
