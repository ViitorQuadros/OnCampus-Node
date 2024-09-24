const Travel = require("./travel")
const create = require("./travelRepository")

class TravelService{
    
    constructor(repository){
        this.repository = repository
    }

    findAllTravels(){
        return this.repository.findAll()
    }

    createTravels({idViagem, nameViagem, voltoInViagem, vouInViagem, vouAndVoltoInViagem, destinoViagem}){
        const newTravels = new Travel(idViagem, nameViagem, voltoInViagem, vouInViagem, vouAndVoltoInViagem, destinoViagem)
        
        this.repository.create(newTravels)
        return newTravels
    }
}

module.exports = TravelService