import sqlite3 from "sqlite3";

const db  = new sqlite3.Database("./src/database/database.db");

const PRODUCT = `
CREATE TABLE "Produto" (
    "ID" INTEGER PRIMARY KEY,
    title VARCHAR(100),
    desc VARCHAR(200),
    price FLOAT (10 , 2)
)`;

const CreateProduct = () => {
    db.run(PRODUCT, (error) => {
        if (error){
            console.log("Erro ao criar a tabela Produto: " + error.message);
        }
    });
};

const USER = `
    CREATE TABLE "Usuario" (
        "ID" INT PRIMARY KEY,
        name VARCHAR(80),
        email VARCHAR(50),
        senha VARCHAR(30)
    )`;

const CreateUser = () => {
    db.run(USER, (error) => {
        if (error){
            console.log("Erro ao criar a tabela Usuário: " + error.message);
        }
    });
};


db.serialize(() => {
    CreateProduct();
    CreateUser();
});