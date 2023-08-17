export const selectUser = (db, callback) => {
    db.all(`SELECT * FROM "Usuario"`, (error, rows) => {
        if (error) {
            callback({ mensagem: "Ocorreu um erro: " + error.message }, null);
        } else {
            callback(null, { resposta: rows });
        }
    });
};

export const insertUser = (db, ModelDado, callback) => {
    db.run(`INSERT INTO "Usuario" (ID, name, email, senha) VALUES (?, ?, ?, ?)`, [
        ModelDado.ID,
        ModelDado.name,
        ModelDado.email,
        ModelDado.senha
    ], (error) => {
        if (error) {
            callback("Ocorreu um erro: " + error.message);
        } else {
            callback("Usuário cadastrado com sucesso!");
        }
    });
};