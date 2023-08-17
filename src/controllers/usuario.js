import { insertUser, selectUser} from "../DAO/usuario.js";
import userModel from "../models/usuario.js";

const userControl = (app, db) => {
    app.get("/usuario", (req, res) => {
        const data = selectUser(db);
        res.send(data);
    });

    app.post("/usuario", (req, res) => {
        const ModelDado = new userModel(req.body);
        const data = insertUser(db, ModelDado);
        res.send(data);
    });

    app.put("/usuario", (req, res) => {
        res.send("Estamos atualizando o seu cadastro");
    });

    app.delete("/usuario", (req, res) => {
        res.send("Estamos deletando seu cadastro");
    });
};

export default userControl;