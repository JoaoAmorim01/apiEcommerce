const insertProduct = (db,ModelData) => {
    db.run(`INSERT INTO "Produto"(ID, title, desc, price) values(?,?,?,?)`, [
        ModelData.ID,
        ModelData.title,
        ModelData.desc,
        ModelData.price
    ], (error) => {
        if(error){
            return "Ocorreu um erro: " + error.messsage;
        }else{
            return "Produto inserido com sucesso!";
        }
    });
};

export default insertProduct; 