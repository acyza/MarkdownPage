const express = require("express");

const app = express()
app.use(express.static("../dist"))
app.use(express.static('./'))

app.listen(8088)