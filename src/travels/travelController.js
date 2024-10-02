const TravelService = require("./travelService");

class TravelController {
	constructor(service) {
		this.service = service;
	}

	index(request) {
		const travel = this.service.findAllTravels();
		return { code: 200, body: { travel } };
	}

	save(request) {
		const {
			idViagem,
			nameViagem,
			voltoInViagem,
			vouInViagem,
			vouAndVoltoInViagem,
			destinoViagem,
		} = request.body;
		const user = request.user;
		//rem
		console.log(user);

		if (!nameViagem) {
			return {
				code: 400,
				body: { message: "A Viagem não pode ser criada sem um nome!!" },
			};
		}
		const travel = this.service.createTravels({
			user,
			idViagem,
			nameViagem,
			voltoInViagem,
			vouInViagem,
			vouAndVoltoInViagem,
			destinoViagem,
		});

		return {
			code: 200,
			body: { message: "Criado viagem com sucesso!!", travel },
		};
	}
}

module.exports = TravelController;
