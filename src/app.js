require("dotenv-safe").config()
const express = require("express")
const cors = require("cors")
const db = require("./database/mongoConfig")
const app = express()

app.use(express.json())
app.use(cors())


app.get("/", (request, response) => {
    response.status(200).send({
        title: "Reprograma -> Cestas Solidárias - Projeto Final",
        version: "1.0.0",
        message: "Olá, ser humano do outro lado da tela, aqui você encontra a primeira versão deste projeto, uma API focada em cadastro de pessoas em situação de vulnerabilidade social."
    })

})

db.connect()
module.exports = app
