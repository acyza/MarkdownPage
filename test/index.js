const express = require("express")
const { spawn } = require('child_process')
function build(){
  spawn("npm install & npm run dev",{
    cwd: "../",
    shell: true,
    stdio: [process.stdin,process.stdout,process.stderr]
  })
}
const app = express()
app.use(express.static("../dist"))
app.use(express.static('./'))

app.listen(8088,()=>{
  console.log('server started http://localhost:8088')
  console.log("build project")
  build()
})
