export function folder(path:string) {
  const split = path.split(/[\/|\\][^\/|\\]*$/)
  return split.length == 1 ? "" : split[0]
}

export function path(path:string){
  return path.trim()
  .replace("\\","/")
  .replace(/\/+/g,"/")
  .replace(/#.*$/,"")
}

export function fillPath(_path:string,base:string){
  /**path http:// https://开头直接返回 */
  if(/^https?:\/\//.test(_path)) return _path

  let result = path(
    /^[^\/|\\]/.test(_path) ?
      `${base}/${_path}`
      : _path
  )
  while(true) {
    const temp = result.split(/[^\/|\.]+\/\.\.\//)
    result = temp.join('')
    if(temp.length == 1) break
  }
  return result;
}

export function suffix(path:string,suffix:string){
  if(/\.[^\/|\\]*$/.test(path))return path
  if(/[\/|\\]$/.test(path)) path = `${path}/index`
  return `${path}${suffix}`
}

export default {path,folder,fillPath,suffix}