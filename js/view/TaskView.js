export default class TaskView {
    constructor() {
        this.list = document.querySelector("#cart-list");
        this.p = document.querySelector("#product-list");
    }

    renderProducts(products) {
        this.list.innerHTML = "";
        products.array.forEach(product => {
            const li = document.createElement("li");
            li.innerHTML = `
                 ${product.text}
            <button data-id = "${product.id}"> Excluir </button>`
        });
    }
}