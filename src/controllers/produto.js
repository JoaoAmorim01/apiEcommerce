import { insertProduct, selectProduct} from "../DAO/produto.js";
import ProductModel from "../models/produto.js";

const productControl = (app, db) => {
    app.get("/produto", (req, res) => {
        const data = selectProduct(db);
        res.json(data);
    });

    app.post("/produto", (req, res) => {
        const ModelData = new ProductModel(req.body);
        const data = insertProduct(db, ModelData);
        res.send(data);
    });

    app.put("/produto", (req, res) => {
        res.send("Estamos atualizando o produto");
    });

    app.delete("/produto", (req, res) => {
        res.send("Estamos deletando um produto");
    });
};

export default productControl;