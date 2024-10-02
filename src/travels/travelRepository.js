const Travel = require("./travel");

class TravelRepository {
	constructor() {
		this.travels = [];
	}

	findAll() {
		return this.travels;
	}

	create(travel) {
		this.travels.push(travel);
	}
}

module.exports = TravelRepository;
