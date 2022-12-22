import { Axios } from "axios";
export interface ConfigTemplate {
  /**
   * 页面模板文件名
   * 位于page文件夹中后缀为.html
   * 文件名不需要后缀
   */
  template?: string;
  /**
   * 样式文件名
   * 位于style文件夹后缀.css
   * 文件名不需要后缀
   */
  style?: string[];
  /**
   * js文件名
   * 位于javascript文件夹后缀.js
   * 文件名不需要后缀
   */
  javascript?: string[];
}
export interface ConfigTitle {
  /**
   * 配置标题
   */
  title: string;
}
function loadConfig(axios: Axios) {
  axios
    .get("mlp-theme-config.json")
    .then((value) => {
      if (value.status == 200) return JSON.parse(value.data);
      else throw `http status code = ${value.status}`;
    })
    .then((value: ConfigTemplate & Partial<ConfigTitle>) => {
      if (value.title) mlp.title = value.title;
      config(value || {}, axios);
    })
    .catch((e) => {
      console.error(`配置加载异常,加载默认配置\n${e}`);
      config({}, axios);
    });
}

window.addEventListener("load", () =>
  loadConfig(new Axios({ baseURL: "./theme" }))
);

import { loadPage } from "./page";
import { loadJs } from "./loadjs";
import { load } from ".";
import { loadStyle } from "./loadStyle";
import mlp from "./global";

export async function config(config: ConfigTemplate, axios: Axios) {
  await loadPage(config, axios);
  loadJs(config, axios);
  loadStyle(config, axios);
  load();
}
export default config;
