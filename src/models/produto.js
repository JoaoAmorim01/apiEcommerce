class ProductModel {
    constructor(body){
        this.ID = body.id ;
        this.title = body.titulo;
        this.desc = body.desc;
        this.price = body.preco;
    }
}

export default ProductModel;