const { existsSync } = require('fs')
const { cp, readFile, opendir, writeFile } = require('fs/promises')

async function loadDefaultTheme(){
  console.log("copy default theme")
  await writeFile("dist/config.json","{theme:\"default\"}")
  cp(`${module.path}\\theme`, "dist\\theme")
}

async function isEmptyFolder(url) {
  const dir = await opendir(url)
  for await (const f of dir)
    return false
  return true
}

const f = async () => {
  if(!exitsSync("doc") || await isEmptyFolder("doc"))
    return console.log("Please put the markdown document in the .//doc folder")
  else {
    console.log("copy doc folder")
    cp("doc","dist\\doc")
  }
  await cp(`module.path\\dist`,".\\dist",{recursive:true})
  if (existsSync("config.json")){
    const config = JSON.parse(
      await (await readFile("config.json"))
        .toString()
    )
    if(config.theme) {
      console.log(`copy theme(${config.theme})`)
      await cp(`theme\\${config.theme}`,`dist\\theme\\${config.theme}`)
    }else if(config.template){
      const cpFolders = ['page','doc','javascript','style']
      console.log("copy page template")
      for(const folder of cpFolders)
        await cp(folder,`dist\\${folder}`)
    }else
    {
      console.error("config error")
      process.exit(-1)
    }
  }else{
    console.log("not fond config.json")
    loadDefaultTheme()
  }
  for(const file of cpFiles)
    if(existsSync(folder))
      cp(file,`.\\dist\\${file}`,{recursive: true})
}
f()
