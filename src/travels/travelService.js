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
        
        //Método para fazer a validadação se a viagem já está criada
        const validadorReservaViagens = this.repository.findAll().find((Travel) => {
            return Travel.idViagem === newTravels.idViagem
        })

        if (validadorReservaViagens){
            throw new Error("A viagem com esse ID já está criada.")
        }

        this.repository.create(newTravels)
        return newTravels
    }
}

module.exports = TravelService