export const selectUser = (db) => {
    db.all(`SELECT * FROM "Usuario"`, (error, rows) => {
        if (error) {
          return { mensagem: "ocorreu um erro: " + error.message };
        } else {
          return { resposta: rows };
        }
      });
    };
export const insertUser = (db,ModelDado) => {
    db.run(`INSERT INTO "Usuario"(ID, name, email, senha) values(?,?,?,?)`, [
        ModelDado.ID,
        ModelDado.name,
        ModelDado.email,
        ModelDado.senha
    ], (error) => {
        if(error){
            return "Ocorreu um erro: " + error.messsage;
        }else{
            return "Usuário cadastrado com sucesso!";
        }
    });
};