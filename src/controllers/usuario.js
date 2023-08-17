import {insertUser, selectUser} from "../DAO/usuario.js";
import userModel from "../models/usuario.js";

const userControl = (app, db) => {
    app.get("/usuario", async (req, res) => {
        try {
            const data = await selectUser(db);
            res.send(data);
        } catch (error) {
            res.status(500).send("Erro ao buscar usuários");
        }
    });

    app.post("/usuario", async (req, res) => {
        try {
            const ModelDado = new userModel(req.body);
            const data = await insertUser(db, ModelDado);
            res.send(data);
        } catch (error) {
            res.status(500).send("Erro ao inserir usuário");
        }
    });

    app.put("/usuario", (req, res) => {
        res.send("Estamos atualizando o seu cadastro");
    });

    app.delete("/usuario", (req, res) => {
        res.send("Estamos deletando seu cadastro");
    });
};

export default userControl;
