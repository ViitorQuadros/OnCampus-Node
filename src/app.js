const fastify = require("fastify");
const TravelRepository = require("./travels/travelRepository");
const TravelService = require("./travels/travelService");

const app = fastify({ logger: true });

const travelRepository = new TravelRepository()
const travelService = new TravelService(travelRepository)


// Método que faz apenas um teste se a aplicação está rodando na porta certa
app.get("/hello", (request, reply) => {
    reply.send({ message: "Hello World:" });
});


app.get("/api/travels"), (request,reply) => {
    const travel = travelService.findAllTravels()
    reply.send(travel)
}


// Método no qual faz a criação da viagens
app.post("/api/travels", (request, reply) => {
   const {idViagem, nameViagem, voltoInViagem, vouInViagem, vouAndVoltoInViagem, destinoViagem} = request.body

   const travel = travelService.createTravels({ idViagem, nameViagem, voltoInViagem, vouInViagem, vouAndVoltoInViagem, destinoViagem})
    
   reply.code(201).send({ message: "Criado viagem com sucesso!!", travel})
});





module.exports = app;