require("dotenv-safe").config()
const express = require("express")
const cors = require("cors")
const db = require("./database/mongoConfig")
const app = express()

app.use(express.json())
app.use(cors())


app.get("/", (request, response) => {          // mudar as frases para inglês com outro contexto.
    response.status(200).send({
        title: "Reprograma -> APIaluguel - Final Project",
        message: "This is the original version of the project, an API focused on allocating homeless people in Recife according to their social vulnerability."
    })

})

db.connect()

const housingRoutes = require("./routes/rentRoutes")

app.use("/homes", housingRoutes)
module.exports = app
