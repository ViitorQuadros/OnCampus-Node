const db = require("../database");
const Travel = require("./travel");

class TravelPostgreRepository {
	constructor() {
		this.db = db
	}

	async findAll() {
		const viagensCriadas = await this.db.manyOrNone('SELECT viagem_id AS "idViagem", name_viagem AS "nameViagem", volto_in_viagem AS "voltoInViagem", vou_in_viagem AS "vouInViagem", vou_and_volto_viagem AS "vouAndVoltoInViagem", destinoViagem FROM Travels');
		return viagensCriadas.map(travel => new Travel(travel));
	}
	// id,idViagem, nameViagem, voltoInViagem,
	//vouInViagem, vouAndVoltoInViagem, destinoViagem
	// id VARCHAR(36) PRIMARY KEY,
	// viagem_id VARCHAR(36),
	// name_viagem VARCHAR(255),
	// volto_in_viagem VARCHAR(3),
	// vou_in_viagem VARCHAR(3),
	// vou_and_volto_viagem VARCHAR(3),
	// destinoViagem VARCHAR(255),
	// FOREIGN KEY (viagem_id) REFERENCES Users(id

	async create(travel) {
		await this.db.none("INSERT INTO Travels (viagem_id, name_viagem,volto_in_viagem, volto_in_viagem,vou_and_volto_viagem, destinoViagem) VALUES (${id}, ${idViagem}, ${nameViagem}, ${voltoInViagem}, ${vouInViagem}, ${vouAndVoltoInViagem}, ${destinoViagem})", travel);
	}
}

module.exports = TravelPostgreRepository;
