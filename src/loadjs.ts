import { ConfigTemplate } from './config'
import { Axios } from 'axios'
export function loadJs(config: ConfigTemplate,axios: Axios){console.log(config)
  if(config.javascript)
    for(const name of config.javascript){
      const scriptDom = document.createElement('script')
      scriptDom.src = `${axios.defaults.baseURL}/javascript/${name}.js`
      document.head.appendChild(scriptDom)
    }
}
