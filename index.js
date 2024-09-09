const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(__dirname + '/scripts'))
app.use(express.static(__dirname + '/public'))


app.use((req, res) => res.sendFile(path.join(__dirname, "public", "index.html")))


const PORT = process.env.PORT || 7000
app.listen(PORT, () => console.log(`server is started at port: ${PORT}`))