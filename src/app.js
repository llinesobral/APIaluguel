require("dotenv-safe").config()
const express = require("express")
const cors = require("cors")
const db = require("./database/mongoConfig")
const app = express()

const homes = require("../src/model/Recifehousing.json")

app.use(express.json())
app.use(cors())


app.get("/", (request, response) => {       
    response.status(200).send({
        title: "Reprograma -> APIaluguel - Final Project",
        message: "This is the original version of the project, an API focused on allocating homeless people in Recife according to their social vulnerability."
    })

})

db.connect()

const housingRoutes = require("./routes/rentRoutes")

app.use("/homes", housingRoutes)
module.exports = app

// id    
app.get("/pe/filter/:id", (request, response) => {
    const callId = request.params.id
    const findId = homes.find(homee => homee.id == callId)

    response.status(200).json(findId)
})

// todas as moradias   
app.get("/pe/all", (request, response) => {
    response.status(200).json(homes)
})

// bairro     
app.get("/pe/district", (request, response) => {
    const calldistrict = request.query.District
    const finddistrict = homes.filter(districtt => districtt.District.includes(calldistrict))
    response.status(200).json(finddistrict)
})

// rua
app.get("/pe/street", (request, response) => {    
    const callStreet = request.query.Street
        const findStreet = homes.find(streett => {
            return streett.Street == callStreet
        })
        return response.status(200).json(findStreet)
})

// alagamento            
app.get("/pe/flooding", (request, response) => {
    const callFlooding = request.query.Flooding
        const findFlooding = homes.filter(flood => flood.Flooding == callFlooding)
        response.status(200).json(findFlooding)
})

// quartos         
app.get("/pe/rooms", (request, response) => {
    const callrooms = request.query.Rooms
        const findrooms = homes.filter(room => room.Rooms == callrooms)
        response.status(200).json(findrooms)
})

// valor            
app.get("/pe/price", (request, response) => {
    const callValue = request.query.Rent_Value
        const findValue = homes.find(valuee => valuee.Rent_Value == callValue)
        response.status(200).json(findValue)
})

// moradia   
app.get("/pe/places", (request, response) => {
    const callHousing = request.query.Home
        const findHousing = homes.find(housing => housing.Home == callHousing)
        response.status(200).json(findHousing)
})

// novas moradias      
app.post("/pe/register", (request, response) => {
    const takeBody = request.body 
        const newhome = { 
            id: (homes.length) +1,
            Home: takeBody.Home,
            Neighborhood: takeBody.Neighborhood,
            Street: takeBody.Street,
            Flooding: takeBody.Flooding,
            Rooms: takeBody.Rooms,
            Rent_Value: takeBody.Rent_Value,
            Address: takeBody.Address,
            Description: takeBody.Description,
        }
        homes.push(newhome)
        response.status(201).json({
            "message": "REGISTERED SUCCESSFULLY.",
            newhome
        })
})

// atualizar moradias
app.put("/pe/update/:id", (request, response) => {
    const callId = request.params.id
        const takeBody = request.body

        const housingFound = homes.find(housiing => housiing.id == callId)
        const index = homes.indexOf(housingFound)

        takeBody.id == takeBody
        homes.splice(index, 1, takeBody)
        response.status(500).json({
            "message": "UPDATED HOUSING.",
            takeBody
        })
})

// delete
app.delete("pe/remove/:id", (request, response) => {
    const callId = request.params.id
    const housingFound = homes.find(housiing => housiing.id == callId)
    
    const index = homes.indexOf(housingFound)
    homes.splice(index, 1)
    response.status(200).json({
        "message": "DWELLING SUCCESSFULLY DELETED.",
        "movie-delete": housingFound,
        homes
    })
})

