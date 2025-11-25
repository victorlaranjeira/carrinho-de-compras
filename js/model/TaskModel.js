export default class StoreModel {
    constructor() {
        this.products = [
            {id: 1, name: "Mouse Gamer" , price:120.00},
            {id: 2, name: "Teclado Mecânico" , price:350.00},
            {id: 3, name: "Cabo HDMI" , price:50.00},
            {id: 4, name: "Webcam Full HD" , price:180.00}
        ];

        this.cart = [];
    }

    getProducts(){
        return this.products;
    }

    // addProducts(text){
    //     const product = {id : Date.now(), text};
    //     this.products.push(product);
    //     return product;
    // }

    removeProducts(id){
        this.products = this.products.filter(t = t.id !== id);
    }
}

