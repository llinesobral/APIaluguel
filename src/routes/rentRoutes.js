const express = require("express")
const app = require("../app")

const controller = require("../controller/rentController")
const routes = express.Router()

// rota para listar por id  GET
routes.get("/filter/:id", controller.searchById)

// rota para listar por bairro  GET
routes.get("/district", controller.searchByDistrict)

// rota para listar por rua  GET 
routes.get("/street", controller.searchByStreet)

// rota para listar por alagamento  GET
routes.get("/flooding", controller.searchForFlooding)

// rota para listar por quartos  GET
routes.get("/rooms", controller.searchForRooms)

// rota para listar por valor  GET
routes.get("/price", controller.searchByValue)

// rota para listar por moradias GET
routes.get("/places", controller.searchForHousing)

// rota para cadastrar moradias  POST
routes.post("/register", controller.registerNewHomes)

// rota para atualizar moradias PUT
routes.put("/update/:id", controller.registerHousing)

// rota para excluir moradias DELETE
routes.delete("/delete", controller.excludeHousing)

// rota para listar todas as moradias GET
routes.get("/all", controller.totalHousing)

module.exports = routes