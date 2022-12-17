#!/usr/bin/env node

const { existsSync } = require('fs')
const { cp, readFile, mkdir, opendir } = require('fs/promises')
const path = require('path')
const http = require('http')

const config = {
  theme: "",
  doc: "doc"
}

function getProcessArgs() {
  const result = {}
  const args = process.argv
  args[1] = '-doc'
  for(let i=2;i<args.length;i++) {
    if(/^-/.test(args[i]))
      result[args[i].replace(/^-/,'')] ||= true
    else if(/^-/.test(args[i-1]))
      result[args[i-1].replace(/^-/,'')] = args[i]
    else throw 'args error -help'
  }
  return result
}

const processArgs = getProcessArgs()

function margeConfig(dist,src){
  for(let key in dist)
    if(src[key]) dist[key] = src[key]
}

async function configInit() {
  if(existsSync("mlp-config.json")){
    const _config = 
      JSON.parse(
        (await readFile("mlp-config.json"))
          .toString()
      )
    margeConfig(config,_config)
  }
  margeConfig(config,processArgs)
}

async function copy(src,dist){
  await mkdir(path.dirname(dist),
    {recursive: true})
  await cp(src,dist,
    {
      recursive: true,
      force: true
    })
}

async function isEmptyFolder(url) {
  const dir = await opendir(url)
  for await (const f of dir)
    return false
  return true
}

async function findTheme(name){
  if(!name) return `${module.path}/theme`
  if(/[^a-z|A-Z|-]/.test(name))throw 'theme name error\ntips:[a-z A-Z -]'
  //要检查的文件夹顺序
  const src = ['theme/','node_modules/','./']
  for(let i=0;i<src.length;i++){
    const path = src[i]+name
    if(existsSync(path) && existsSync(path+"/"+"mlp-theme-config.json"))
      return path
  }
  throw 'theme not fond'
}

const gen = async () => {
  if(!existsSync(config.doc) || await isEmptyFolder(config.doc))
    return console.log("Please put the markdown document in the .//doc folder or config document path")
  else {
    console.log("copy doc folder")
    copy(config.doc,"dist/doc")
  }
  console.log("copy markdown-load-page files")
  await copy(`${module.path}/dist`,"./dist")
  console.log(`copy theme(${config.theme||'[default]'})`)
  await copy(await findTheme(config.theme),`dist/theme`)
}

async function main() {
  if(processArgs["-help"])
    return console.log("-doc 指定markdown文档路径\n-theme 设置主题名称\n也可以把这些参数写入mlp-config.json文件中")
  await configInit()
  await gen()
  if(processArgs["perview"]){
    const server = new http.Server(async(req,res)=>{
      if(!new RegExp(`^${process.cwd}/dist/.*`).test(path.normalize(req.url))){
        req.statusCode = 500
        res.write("error")
        return res.end()
      }
      if(req.url && existsSync("./dist/"+req.url)){
        res.write((await readFile(/\/$/.test(req.url) ? req.url+"/index.html":req.url)).toString())
      }else{
        res.write("404 not found")
      }
      res.end()
    })
    server.listen(8080)
  }
}

main()
.catch(console.error)
