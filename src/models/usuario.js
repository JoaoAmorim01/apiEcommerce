class UserModel {
    constructor(body){
        this.ID = body.id ;
        this.name = body.nome;
        this.email = body.email;
        this.senha = body.senha;
    }
}

export default UserModel;