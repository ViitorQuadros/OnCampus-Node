const fastify = require("fastify");
const TravelRepository = require("./travels/travelRepository");
const TravelService = require("./travels/travelService");
const TravelController = require("./travels/travelController");

const app = fastify({ logger: true });

const travelRepository = new TravelRepository()
const travelService = new TravelService(travelRepository)
//Vinculado ao método de listar Viagens
const travelController = new TravelController(travelService)


// Método que faz apenas um teste se a aplicação está rodando na porta certa
app.get("/hello", (request, reply) => {
    reply.send({ message: "Hello World:" });
});

// Método no qual lista todas as viagens cadastradas
app.get("/api/travels", (request, reply) => {

    const {code , body} = travelController.index(request)
    reply.code(code).send(body)
});


// Método no qual faz a criação da viagens
app.post("/api/travels", (request, reply) => {
   const {code, body} = travelController.save(request)
   reply.code(code).send(body)
});





module.exports = app;