export default class CartView {
    constructor() {
        this.productList = document.querySelector("#product-list");
        this.cartList = document.querySelector("#cart-list");
        this.cartTotal = document.querySelector("#cart-total");
    }

    // ----------------------------------------------------
    // Renderização da Vitrine de Produtos
    // ----------------------------------------------------
    renderProducts(products) {
        if (!this.productList) return;
        this.productList.innerHTML = "";

        products.forEach(product => {
            const div = document.createElement("div");
            div.className = "product-item";
            
            div.innerHTML = `
                <h3>${product.name}</h3>
                <p class="price">R$ ${product.price.toFixed(2)}</p>
                <button data-id="${product.id}" class="add-to-cart-btn"> Adicionar ao Carrinho </button>
            `;
            
            this.productList.appendChild(div);
        });
    }

    // ----------------------------------------------------
    // Renderização do Carrinho de Compras
    // ----------------------------------------------------
    renderCart(cartItems, total) {
        if (!this.cartList) return;
        this.cartList.innerHTML = "";
        
        if (cartItems.length > 0) {
            cartItems.forEach(item => {
                const li = document.createElement("li");
                li.className = "cart-item";
                const subtotal = item.price * item.quantity;

                li.innerHTML = `
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">R$ ${item.price.toFixed(2)}</span>
                    
                    <div class="item-actions">
                        <button data-id="${item.id}" data-action="decrease" class="btn-quantity">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button data-id="${item.id}" data-action="increase" class="btn-quantity">+</button>
                    </div>

                    <span class="item-subtotal">Subtotal: R$ ${subtotal.toFixed(2)}</span>
                    <button data-id="${item.id}" data-action="remove" class="btn-remove">X</button>
                `;
                
                this.cartList.appendChild(li);
            });
        } else {
            this.cartList.innerHTML = `<li class="empty-cart-message">O carrinho está vazio.</li>`;
        }

        if (this.cartTotal) {
            this.cartTotal.textContent = `Total Geral: R$ ${total.toFixed(2)}`;
        }
    }
    
    // ----------------------------------------------------
    // Ligação de Eventos (Informa o Controller sobre a ação)
    // ----------------------------------------------------
    
    // Liga o evento de adicionar item (na vitrine)
    bindAddProduct(handler) {
        if (!this.productList) return;

        this.productList.addEventListener('click', event => {
            const button = event.target.closest('.add-to-cart-btn');

            if (button) {
                const productId = parseInt(button.dataset.id);
                // Manda a ação (id) para a função do Controller
                handler(productId); 
            }
        });
    }

    // Liga os eventos de +, -, e Remover (no carrinho)
    bindCartActions(handler) {
        if (!this.cartList) return;

        this.cartList.addEventListener('click', event => {
            const target = event.target;
            
            const btnQuantity = target.closest('.btn-quantity');
            const btnRemove = target.closest('.btn-remove');

            if (btnQuantity || btnRemove) {
                const button = btnQuantity || btnRemove;
                const productId = parseInt(button.dataset.id);
                const action = button.dataset.action; // 'increase', 'decrease' ou 'remove'
                
                // Manda a ação (id e operação) para a função do Controller
                handler(productId, action); 
            }
        });
    }

    bindCheckout(handler) {
        const checkoutBtn = document.querySelector("#checkout-btn");
        
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                handler(); // Chama a função do Controller
            });
        }
    }
}