import { ConfigTemplate } from './config'
import { Axios } from 'axios'
export function loadStyle(config: ConfigTemplate,axios: Axios){
  if(config.style)
    for(const url of config.style){
      const scriptDom = document.createElement('link')
      scriptDom.rel = "stylesheet"
      scriptDom.href = `${axios.defaults.baseURL}/style/${url}.css`
      document.head.appendChild(scriptDom)
    }
}
