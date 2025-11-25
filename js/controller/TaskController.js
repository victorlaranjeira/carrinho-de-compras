export default class TaskControler {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.renderProducts(this.model.getProducts());
        this.view.binDeleteProduct(this.handleDelectProduct);
    }

    handleDelectProduct = (id) => {
        this.model.removeProduct(id);
        this.view.renderProduct(this.model.getProducts());
    }
}