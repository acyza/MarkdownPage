export function folder(path:string) {
  const split = path.split(/[\/|\\][^\/|\\]*$/)
  return split.length == 1 ? "" : split[0]
}

export function path(path:string){
  return ("/" + path.trim())
  .replace("\\","/")
  .replace(/\/+/g,"/")
}

export function fillPath(_path:string,base:string){
  if(/^https?:\/\//.test(_path)) return _path
  return path(
    /^[^\/|\\]/.test(_path) ?
      `${base}/${_path}`
      : _path
  )
}

export default {path,folder,fillPath}