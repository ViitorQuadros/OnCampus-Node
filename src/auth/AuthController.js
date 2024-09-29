class AuthController{
  constructor(service){
    this.service = service;
  }

  register(request){
    const {name, email, password} = request.body
    if(!name || !email || !password){
      return { code : 400, body: {message: "Nome, email, senha são obrigatórios"}}
    }
    try{
      const user = this.service.register(name,email,password)
      return{code: 201, body: user, message : "Usuário criado com sucesso!!"}
    } catch(error){
      return {code: 400, body: {message: error.message}}
    }
  }

}

module.exports = AuthController;