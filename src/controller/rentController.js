const homes = require("../model/houseRent.json")

// listar todas as casas e apartamentos GET
const totalHousing = (request,response) => {
    response.status(200).json({
        "message": "LIST OF HOUSES AND APARTMENTS.",
        homes
    })
}
// listar por id GET
const searchById = (request, response) => {
    try {
        const callId = request.params.id
        const findId = homes.find(homee => homee.id == callId)
        if(!findId) {
            throw new Error ("ID NOT FOUND.")
        }
        response.status(200).json(callId)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}
// listar por bairro GET
const searchByNeighborhood = (request, response) => {
    try {
        const callNeighborhood = request.query.Neighborhood
        const findNeighborhood = homes.filter(neighborhoood => {
            return neighborhoood.Neighborhood == callNeighborhood
        })
        if(!findNeighborhood) {
            throw new Error("NEIGHBORHOOD NOT FOUND.")
        }
        return response.status(200).json(findNeighborhood)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}
// listar por rua GET
const searchByStreet = (request, response) => {
    try {
        const callStreet = request.query.Street
        const findStreet = homes.filter(streett => {
            return streett.Street == callStreet
        })
        if(!findStreet) {
            throw new Error("STREET NOT FOUND.")
        }
        return response.status(200).json(findStreet)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}
// listar por alagamento GET
searchForFlooding = (request, response) => {
    try {
        const callFlooding = request.query.Flooding
        const findFlooding = homes.filter(flood => flood.Flooding == callFlooding)
        if(!findFlooding) {
            throw new Error("FLOODING NOT FOUND.")
        }
        response.status(200).json(findFlooding)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}
// listar por número de quartos GET
searchForRooms = (request, response) => {
    try {
        const callrooms = request.query.Rooms
        const findrooms = homes.filter(room => room.Rooms == callrooms)
        if(!findrooms) {
            throw new Error("ROOM NOT FOUND.")
        }
        response.status(200).json(findrooms)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}
// listar por valor GET
searchByValue = (request, response) => {           // ainda não terminado, precisar colocar IFS para valores em reais $.
    try {
        const callValue = request.query.Rent_Value
        const findValue = homes.find(valuee => valuee.Rent_Value == callValue)
        if(!findValue ) {
            throw new Error("VALUE NOT FOUND.")
        }
        response.status(200).json(findValue)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}
// cadastrar novas moradias POST
const registerNewHomes = (request, response) => {
    try {
        const takeBody = request.body 
        const newhome = { 
            id: (homes.length) +1,
            Home: takeBody.Home,
            District: takeBody.District,
            Street: takeBody.Street,
            
        }
    } catch (error) {
        
    }
}
