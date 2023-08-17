import express from "express";
import db from "./database/sqlite.js"
const app = express();

app.use(express.json());

import productControl from "./controllers/produto.js";
productControl(app, db);

import userControl from "./controllers/usuario.js";
userControl(app,db);

export default app;