#!/usr/bin/env node

const { existsSync } = require('fs')
const { cp, readFile, mkdir, opendir, writeFile } = require('fs/promises')
const path = require('path')

async function copy(src,dist){
  await mkdir(path.dirname(dist),
    {recursive: true})
  await cp(src,dist,
    {
      recursive: true,
      force: true
    })
}

async function loadDefaultTheme(){
  console.log("copy default theme")
  await mkdir("dist",{recursive: true})
  await writeFile("dist/config.json","{\"theme\":\"default\"}")
  await copy(`${module.path}/theme`, "dist/theme/default")
}

async function isEmptyFolder(url) {
  const dir = await opendir(url)
  for await (const f of dir)
    return false
  return true
}

const f = async () => {
  if(!existsSync("doc") || await isEmptyFolder("doc"))
    return console.log("Please put the markdown document in the .//doc folder")
  else {
    console.log("copy doc folder")
    copy("doc","dist/doc")
  }
  await copy(`${module.path}/dist`,"./dist")
  if (existsSync("config.json")){
    const config = JSON.parse(
      await (await readFile("config.json"))
        .toString()
    )
    copy("config.json","dist/config.json")
    if(config.theme) {
      console.log(`copy theme(${config.theme})`)
      await copy(`theme/${config.theme}`,`dist/theme/${config.theme}`)
    }else if(config.template){
      const cpFolders = ['page','javascript','style','doc']
      console.log("copy page template")
      for(const folder of cpFolders)
        await copy(folder,`dist/${folder}`)
    }else
    {
      console.error("config error")
      process.exit(-1)
    }
  }else{
    console.log("not fond config.json")
    loadDefaultTheme()
  }
}
f()
