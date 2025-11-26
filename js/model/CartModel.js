// Simula um "Banco de Dados" simples de produtos disponíveis
const PRODUCTS = [
    { id: 1, name: "Teclado", price: 299.90 },
    { id: 2, name: "Mouse", price: 89.90 },
    { id: 3, name: "Smartwatch X5", price: 450.00 },
    { id: 4, name: "Fone Bluetooth", price: 120.00 }
];

export default class CartModel {
    constructor() {
        // Inicializa o carrinho, tentando carregar do localStorage
        const storedCart = localStorage.getItem('shoppingCart');
        this.cart = storedCart ? JSON.parse(storedCart) : [];
    }

    // ----------------------------------------------------
    // C - CREATE (Cria/Adiciona)
    // ----------------------------------------------------
    addItem(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);

        if (existingItem) {
            // Se o item existe, vira uma operação UPDATE (incrementa a quantidade)
            existingItem.quantity++;
        } else {
            // Se não existe, cria um novo item no carrinho
            this.cart.push({ ...product, quantity: 1 });
        }
        this._commit();
    }

    // ----------------------------------------------------
    // U - UPDATE (Atualiza Quantidade)
    // ----------------------------------------------------
    updateQuantity(productId, operation) {
        const item = this.cart.find(i => i.id === productId);

        if (item) {
            if (operation === 'increase') {
                item.quantity++;
            } else if (operation === 'decrease') {
                item.quantity--;
            }

            // Se a quantidade for <= 0, DELETA o item
            if (item.quantity <= 0) {
                this.removeItem(productId);
                return;
            }
            this._commit();
        }
    }
    
    // ----------------------------------------------------
    // D - DELETE (Remove Item)
    // ----------------------------------------------------
    removeItem(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this._commit();
    }

    // ----------------------------------------------------
    // R - READ (Leitura e Cômputo)
    // ----------------------------------------------------
    getProducts() {
        // Retorna a lista de produtos disponíveis para o View
        return PRODUCTS;
    }
    
    getCart() {
        return this.cart;
    }

    calculateTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    clearCart() {
        this.cart = [];
        this._commit();
    }
    
    // ----------------------------------------------------
    // Persistência (Método Privado)
    // ----------------------------------------------------
    _commit() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    }
}