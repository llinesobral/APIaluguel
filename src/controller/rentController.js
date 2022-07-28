const homes = require("../model/Recifehousing.json")

const totalHousing = (request,response) => {
    response.status(200).json({
        "message": "LIST OF HOUSES AND APARTMENTS.",
        homes
    })
}

const searchById = (request, response) => {
    try {
        const callId = request.params.id
        const findId = homes.find(homee => homee.id == callId)
        if(!findId) {
            throw new Error ("ID NOT FOUND.")
        }
        response.status(200).json(findId)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const searchByDistrict = (request, response) => {    
    try {
        const calldistrict = request.query.District
        const finddistrict = homes.filter(districtt => districtt.District.includes(calldistrict))
        if(!finddistrict) {
            throw new Error("NEIGHBORHOOD NOT FOUND.")
        }
        response.status(200).json(finddistrict)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const searchByStreet = (request, response) => {   
    try {
        const callStreet = request.query.Street
        const findStreet = homes.find(streett => {
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

const searchForFlooding = (request, response) => {
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

const searchForRooms = (request, response) => {
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

const searchByValue = (request, response) => {           
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

const searchForHousing = (request, response) => {
    try {
        const callHousing = request.query.Home
        const findHousing = homes.find(housing => housing.Home == callHousing)
        if(!findHousing) {
            throw new Error("NOT FOUND.")
        }
        response.status(200).json(findHousing)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const registerNewHomes = (request, response) => {
    try {
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
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const registerHousing = (request, response) => {
    try {
        const callId = request.params.id
        const takeBody = request.body

        const housingFound = homes.find(housiing => housiing.id == callId)
        const index = homes.indexOf(housingFound)

        takeBody.id == takeBody
        homes.splice(index, 1, takeBody)

        if(housingFound == undefined) {
            throw new Error ("DWELLING NOT FOUND, BECAUSE THE ID WAS NOT IDENTIFIED.")
        }
        response.status(500).json({
            "message": "UPDATED HOUSING.",
            takeBody
        })

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

const excludeHousing = (request, response) => {
    try {
        const callId = request.params.id
        const housingFound = homes.find(housiing => housiing.id == callId)
    
    const index = homes.indexOf(housingFound)
    homes.splice(index, 1)
    if(housingFound == undefined) {
        throw new Error ("ID NOT FOUND.")
    }
    response.status(200).json({
        "message": "DWELLING SUCCESSFULLY DELETED."
    })
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }
}

module.exports = {
    excludeHousing,
    registerHousing,
    registerNewHomes,
    searchById,
    searchByDistrict,
    searchByStreet,
    searchByValue,
    searchForFlooding,
    totalHousing,
    searchForRooms,
    searchForHousing
}