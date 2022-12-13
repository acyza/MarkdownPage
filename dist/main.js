(()=>{var e={230:e=>{e.exports="object"==typeof self?self.FormData:window.FormData}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{"use strict";n.d(r,{z:()=>wt});let e=0;var t,o;(o=t||(t={}))[o.done=0]="done",o[o.loading=1]="loading",o[o.error=2]="error";const s=window.mlp={title:"",home:{},go:{},back:()=>history.back(),forword:()=>history.forward(),reflush:{},current:void 0,get status(){return e},set status(t){e=t,window.dispatchEvent(new Event("mlp_status_change"))},onStatusChange(t,n){window.addEventListener("mlp_status_change",(()=>t(e))),n&&t(e)}};function i(e){return("/"+e.trim()).replace("\\","/").replace(/\/+/g,"/")}const a=function(e){const t=e.split(/[\/|\\][^\/|\\]*$/);return 1==t.length?"":t[0]},c=function(e,t){return/^https?:\/\//.test(e)?e:i(/^[^\/|\\]/.test(e)?`${t}/${e}`:e)};function u(e,t){return function(){return e.apply(t,arguments)}}const{toString:l}=Object.prototype,{getPrototypeOf:f}=Object,d=(h=Object.create(null),e=>{const t=l.call(e);return h[t]||(h[t]=t.slice(8,-1).toLowerCase())});var h;const p=e=>(e=e.toLowerCase(),t=>d(t)===e),m=e=>t=>typeof t===e,{isArray:g}=Array,y=m("undefined"),w=p("ArrayBuffer"),b=m("string"),E=m("function"),O=m("number"),v=e=>null!==e&&"object"==typeof e,S=e=>{if("object"!==d(e))return!1;const t=f(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},R=p("Date"),x=p("File"),A=p("Blob"),j=p("FileList"),T=p("URLSearchParams");function C(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),g(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function N(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const P="undefined"==typeof self?"undefined"==typeof global?void 0:global:self,_=e=>!y(e)&&e!==P,L=(U="undefined"!=typeof Uint8Array&&f(Uint8Array),e=>U&&e instanceof U);var U;const D=p("HTMLFormElement"),B=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),F=p("RegExp"),k=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};C(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},$={isArray:g,isArrayBuffer:w,isBuffer:function(e){return null!==e&&!y(e)&&null!==e.constructor&&!y(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||l.call(e)===t||E(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&w(e.buffer),t},isString:b,isNumber:O,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:S,isUndefined:y,isDate:R,isFile:x,isBlob:A,isRegExp:F,isFunction:E,isStream:e=>v(e)&&E(e.pipe),isURLSearchParams:T,isTypedArray:L,isFileList:j,forEach:C,merge:function e(){const{caseless:t}=_(this)&&this||{},n={},r=(r,o)=>{const s=t&&N(n,o)||o;S(n[s])&&S(r)?n[s]=e(n[s],r):S(r)?n[s]=e({},r):g(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&C(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(C(t,((t,r)=>{n&&E(t)?e[r]=u(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&f(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:d,kindOfTest:p,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(g(e))return e;let t=e.length;if(!O(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:D,hasOwnProperty:B,hasOwnProp:B,reduceDescriptors:k,freezeMethods:e=>{k(e,((t,n)=>{if(E(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];E(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return g(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:N,global:P,isContextDefined:_,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=g(e)?[]:{};return C(e,((e,t)=>{const s=n(e,r+1);!y(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)}};function I(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}$.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const z=I.prototype,M={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{M[e]={value:e}})),Object.defineProperties(I,M),Object.defineProperty(z,"isAxiosError",{value:!0}),I.from=(e,t,n,r,o,s)=>{const i=Object.create(z);return $.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),I.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const q=I,J=n(230);function H(e){return $.isPlainObject(e)||$.isArray(e)}function W(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function K(e,t,n){return e?e.concat(t).map((function(e,t){return e=W(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const V=$.toFlatObject($,{},null,(function(e){return/^is[A-Z]/.test(e)})),X=function(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new(J||FormData);const r=(n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!$.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&(c=t)&&$.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator];var c;if(!$.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if($.isDate(e))return e.toISOString();if(!a&&$.isBlob(e))throw new q("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(e)||$.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if($.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if($.isArray(e)&&function(e){return $.isArray(e)&&!e.some(H)}(e)||$.isFileList(e)||$.endsWith(n,"[]")&&(a=$.toArray(e)))return n=W(n),a.forEach((function(e,r){!$.isUndefined(e)&&null!==e&&t.append(!0===i?K([n],r,s):null===i?n:n+"[]",u(e))})),!1;return!!H(e)||(t.append(K(o,n,s),u(e)),!1)}const f=[],d=Object.assign(V,{defaultVisitor:l,convertValue:u,isVisitable:H});if(!$.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!$.isUndefined(n)){if(-1!==f.indexOf(n))throw Error("Circular reference detected in "+r.join("."));f.push(n),$.forEach(n,(function(n,s){!0===(!($.isUndefined(n)||null===n)&&o.call(t,n,$.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),f.pop()}}(e),t};function G(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Q(e,t){this._pairs=[],e&&X(e,this,t)}const Z=Q.prototype;Z.append=function(e,t){this._pairs.push([e,t])},Z.toString=function(e){const t=e?function(t){return e.call(this,t,G)}:G;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Y=Q;function ee(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function te(e,t,n){if(!t)return e;const r=n&&n.encode||ee,o=n&&n.serialize;let s;if(s=o?o(t,n):$.isURLSearchParams(t)?t.toString():new Y(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const ne=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oe="undefined"!=typeof URLSearchParams?URLSearchParams:Y,se=FormData,ie=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),ae="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ce={isBrowser:!0,classes:{URLSearchParams:oe,FormData:se,Blob},isStandardBrowserEnv:ie,isStandardBrowserWebWorkerEnv:ae,protocols:["http","https","file","blob","url","data"]},ue=function(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&$.isArray(r)?r.length:s,a?($.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&$.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&$.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,((e,r)=>{t(function(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},le={"Content-Type":void 0},fe={transitional:re,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=$.isObject(e);if(o&&$.isHTMLForm(e)&&(e=new FormData(e)),$.isFormData(e))return r&&r?JSON.stringify(ue(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return X(e,new ce.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ce.isNode&&$.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=$.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return X(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if($.isString(e))try{return(0,JSON.parse)(e),$.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||fe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&$.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw q.from(e,q.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ce.classes.FormData,Blob:ce.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};$.forEach(["delete","get","head"],(function(e){fe.headers[e]={}})),$.forEach(["post","put","patch"],(function(e){fe.headers[e]=$.merge(le)}));const de=fe,he=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pe=Symbol("internals");function me(e){return e&&String(e).trim().toLowerCase()}function ge(e){return!1===e||null==e?e:$.isArray(e)?e.map(ge):String(e)}function ye(e,t,n,r){return $.isFunction(r)?r.call(this,t,n):$.isString(t)?$.isString(r)?-1!==t.indexOf(r):$.isRegExp(r)?r.test(t):void 0:void 0}class we{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=me(t);if(!o)throw new Error("header name must be a non-empty string");const s=$.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ge(e))}const s=(e,t)=>$.forEach(e,((e,n)=>o(e,n,t)));return $.isPlainObject(e)||e instanceof this.constructor?s(e,t):$.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&he[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=me(e)){const n=$.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if($.isFunction(t))return t.call(this,e,n);if($.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=me(e)){const n=$.findKey(this,e);return!(!n||t&&!ye(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=me(e)){const o=$.findKey(n,e);!o||t&&!ye(0,n[o],o,t)||(delete n[o],r=!0)}}return $.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return $.forEach(this,((r,o)=>{const s=$.findKey(n,o);if(s)return t[s]=ge(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ge(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return $.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&$.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[pe]=this[pe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=me(e);t[r]||(function(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return $.isArray(e)?e.forEach(r):r(e),this}}we.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),$.freezeMethods(we.prototype),$.freezeMethods(we);const be=we;function Ee(e,t){const n=this||de,r=t||n,o=be.from(r.headers);let s=r.data;return $.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Oe(e){return!(!e||!e.__CANCEL__)}function ve(e,t,n){q.call(this,null==e?"canceled":e,q.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(ve,q,{__CANCEL__:!0});const Se=ve,Re=ce.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),$.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),$.isString(r)&&i.push("path="+r),$.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function xe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ae=ce.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=$.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function je(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Te="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=be.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}$.isFormData(r)&&(ce.isStandardBrowserEnv||ce.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=xe(e.baseURL,e.url);function l(){if(!c)return;const r=be.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),te(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new q("Request aborted",q.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new q("Network Error",q.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||re;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new q(t,r.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,c)),c=null},ce.isStandardBrowserEnv){const t=(e.withCredentials||Ae(u))&&e.xsrfCookieName&&Re.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&$.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),$.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",je(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",je(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new Se(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===ce.protocols.indexOf(f)?n(new q("Unsupported protocol "+f+":",q.ERR_BAD_REQUEST,e)):c.send(r||null)}))},Ce={http:null,xhr:Te};$.forEach(Ce,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function Ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Se(null,e)}function Pe(e){return Ne(e),e.headers=be.from(e.headers),e.data=Ee.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=$.isString(n)?Ce[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new q(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error($.hasOwnProp(Ce,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!$.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||de.adapter)(e).then((function(t){return Ne(e),t.data=Ee.call(e,e.transformResponse,t),t.headers=be.from(t.headers),t}),(function(t){return Oe(t)||(Ne(e),t&&t.response&&(t.response.data=Ee.call(e,e.transformResponse,t.response),t.response.headers=be.from(t.response.headers))),Promise.reject(t)}))}const _e=e=>e instanceof be?e.toJSON():e;function Le(e,t){t=t||{};const n={};function r(e,t,n){return $.isPlainObject(e)&&$.isPlainObject(t)?$.merge.call({caseless:n},e,t):$.isPlainObject(t)?$.merge({},t):$.isArray(t)?t.slice():t}function o(e,t,n){return $.isUndefined(t)?$.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!$.isUndefined(t))return r(void 0,t)}function i(e,t){return $.isUndefined(t)?$.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(_e(e),_e(t),!0)};return $.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);$.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ue={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ue[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const De={};Ue.transitional=function(e,t,n){function r(e,t){return"[Axios v1.2.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new q(r(o," has been removed"+(t?" in "+t:"")),q.ERR_DEPRECATED);return t&&!De[o]&&(De[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const Be={assertOptions:function(e,t,n){if("object"!=typeof e)throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new q("option "+s+" must be "+n,q.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new q("Unknown option "+s,q.ERR_BAD_OPTION)}},validators:Ue},Fe=Be.validators;class ke{constructor(e){this.defaults=e,this.interceptors={request:new ne,response:new ne}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Le(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&Be.assertOptions(n,{silentJSONParsing:Fe.transitional(Fe.boolean),forcedJSONParsing:Fe.transitional(Fe.boolean),clarifyTimeoutError:Fe.transitional(Fe.boolean)},!1),void 0!==r&&Be.assertOptions(r,{encode:Fe.function,serialize:Fe.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&$.merge(o.common,o[t.method]),s&&$.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=be.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Pe.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Pe.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return te(xe((e=Le(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],(function(e){ke.prototype[e]=function(t,n){return this.request(Le(n||{},{method:e,url:t,data:(n||{}).data}))}})),$.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Le(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ke.prototype[e]=t(),ke.prototype[e+"Form"]=t(!0)}));const $e=ke;class Ie{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Se(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ie((function(t){e=t})),cancel:e}}}const ze=Ie,Me=function e(t){const n=new $e(t),r=u($e.prototype.request,n);return $.extend(r,$e.prototype,n,{allOwnKeys:!0}),$.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Le(t,n))},r}(de);Me.Axios=$e,Me.CanceledError=Se,Me.CancelToken=ze,Me.isCancel=Oe,Me.VERSION="1.2.1",Me.toFormData=X,Me.AxiosError=q,Me.Cancel=Me.CanceledError,Me.all=function(e){return Promise.all(e)},Me.spread=function(e){return function(t){return e.apply(null,t)}},Me.isAxiosError=function(e){return $.isObject(e)&&!0===e.isAxiosError},Me.mergeConfig=Le,Me.AxiosHeaders=be,Me.formToJSON=e=>ue($.isHTMLForm(e)?new FormData(e):e),Me.default=Me;const qe=Me,{Axios:Je,AxiosError:He,CanceledError:We,isCancel:Ke,CancelToken:Ve,VERSION:Xe,all:Ge,Cancel:Qe,isAxiosError:Ze,spread:Ye,toFormData:et,AxiosHeaders:tt,formToJSON:nt,mergeConfig:rt}=qe;var ot=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const st="{{content}}";function it(e){e.get("config.json").then((e=>{if(200==e.status)return JSON.parse(e.data);throw`http status code = ${e.status}`})).then((t=>{t.title&&(s.title=t.title),t.theme?it(new Je({baseURL:`${e.defaults.baseURL}/theme/${t.theme}`})):at(t||{},e)})).catch((t=>{console.error(`配置加载异常,加载默认配置\n${t}`),at({},e)}))}function at(e,t){return n=this,r=void 0,s=function*(){yield function(e,t){return ot(this,void 0,void 0,(function*(){function n(e){return ot(this,void 0,void 0,(function*(){if("content"==e)return'<div id="content"></div>';try{return(yield t.get(`/page/${e}.html`)).data}catch(e){return""}}))}document.body.innerHTML=yield function(e,t){return ot(this,void 0,void 0,(function*(){const n=[],r=/\{\{[^\{]/g,o=/[^\}]\}\}/g;for(;r.exec(e);){if(n.push(e.substring(o.lastIndex,r.lastIndex-3)),o.lastIndex=r.lastIndex,!o.exec(e))return console.log("解析错误"),"module analysis error";n.push(yield t(e.substring(r.lastIndex-1,o.lastIndex-2).trim()))}return n.push(e.substring(o.lastIndex,e.length)),n.join("")}))}(e.template?yield n(e.template):st,n)}))}(e,t),function(e,t){if(e.javascript)for(const n of e.javascript){const e=document.createElement("script");e.src=`${t.defaults.baseURL}/javascript/${n}.js`,document.head.appendChild(e)}}(e,t),function(e,t){if(e.style)for(const n of e.style){const e=document.createElement("link");e.rel="stylesheet",e.href=`${t.defaults.baseURL}/style/${n}.css`,document.head.appendChild(e)}}(e,t),wt()},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{c(s.next(e))}catch(e){t(e)}}function a(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}c((s=s.apply(n,r||[])).next())}));var n,r,o,s}window.addEventListener("load",(()=>it(new Je({baseURL:"./"}))));const ct=window.hljs,ut=window.ketex,lt=window.marked;function ft(e){const t={name:`math_${e}`,level:e,start:t=>t.indexOf("inline"==e?"$":"$$"),tokenizer(n){const r=n.match("inline"==e?/^\$+([^\$\n]+?)\$+/:/^\$\$+([^\$\n]+?)\$\$+/);return r&&{type:t.name,raw:r[0],text:r[1].trim()}},renderer:e=>`<p class=${t.name}>${ut.renderToString(e.text,{throwOnError:!1})}</p>`};return t}lt.use({extensions:[ft("inline"),ft("block")],renderer:{link:(e,t,n)=>`<a\n        href="javascript:void(0)"\n        onclick="mlp.go('${e}')"\n        ${t?`title=${t}`:""}\n      >${n}</a>`,image:(e,t,n)=>null===e?n:`<img src=".${c(e,a("doc/"+s.current))}"\n          ${t?`title=${t}`:""}\n          />`}}),lt.setOptions({highlight(e,t,n){const r=ct.highlight(e,{language:t});return n&&n(r.errorRaised,r.value),r.value}});const dt=new Proxy({},{get:(e,t)=>decodeURI(location.search.replace(new RegExp(`^(?:.*[&//?]${encodeURI(t).replace(/[\.\+\*]/g,"\\$&")}(?:\\=([^&]*))?)?.*$`,"i"),"$1"))}),ht=(()=>{const e=new XMLHttpRequest,t={success:()=>{}};return e.onloadend=function(){4==this.readyState&&(200===this.status?t.success&&t.success(this.responseText):t.error&&t.error(this),delete t.error)},e.onerror=e=>t.error&&t.error(e),n=>(t.error&&(t.error("reset"),e.abort()),new Promise(((r,o)=>{t.success=r,t.error=o,e.open("get",`./doc/${n}`),e.send()})))})();function pt(e){if(/^https?:\/\//.test(e))return open(e,"_blank");if(/.*[?,=].*/.test(e))throw"path error";(e=e?c(e,a(s.current)):"/README.md")!=s.current&&(history.pushState(void 0,"",`?path=${e}`),mt())}function mt(){!function(e){s.current=e,s.status=1,window.dispatchEvent(new Event("loading")),ht(e).then((e=>{yt&&(yt.innerHTML=lt.parse(e)),s.status=0,s.title,window.dispatchEvent(new Event("loaded"))})).catch((e=>{console.error(e),s.status=2,window.dispatchEvent(new Event("loaderr"))}))}(dt.path||"/README.md")}var gt,yt;function wt(){gt=document.querySelector("title"),yt=document.querySelector("#content");var e=gt.innerText=s.title;Object.defineProperty(s,"title",{get(){var t;return gt.innerText=e||`${(null===(t=yt.querySelector("h1"))||void 0===t?void 0:t.innerText)||"document"}-doc`},set(t){e=t,s.title}}),mt()}s.go=pt,s.home=()=>pt("/README.md"),s.reflush=mt,window.addEventListener("popstate",mt)})()})();