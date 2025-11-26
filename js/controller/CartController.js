export default class CartController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // 1. Inicializa a aplicação
        this.updateView();
        
        // 2. Renderiza a vitrine inicial de produtos
        const availableProducts = this.model.getProducts();
        this.view.renderProducts(availableProducts);

        // 3. Conecta eventos do View aos métodos do Controller
        this.view.bindAddProduct(this.handleAddProduct);
        this.view.bindCartActions(this.handleCartAction);
        this.view.bindCheckout(this.handleCheckout);
    }
    
    // Método que atualiza o View com os dados atuais do Model
    updateView = () => {
        const cartItems = this.model.getCart();
        const total = this.model.calculateTotal();
        this.view.renderCart(cartItems, total);
    }

    // Handler para adicionar produto (chamado pelo View)
    handleAddProduct = (productId) => {
        this.model.addItem(productId);
        this.updateView();
    }

    // Handler para ações no carrinho (+, -, Remover)
    handleCartAction = (productId, action) => {
        if (action === 'increase' || action === 'decrease') {
            this.model.updateQuantity(productId, action);
        } else if (action === 'remove') {
            this.model.removeItem(productId);
        }
        this.updateView();
    }

    handleCheckout = () => {
        const currentTotal = this.model.calculateTotal();
        
        if (currentTotal === 0) {
            alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
            return;
        }

        // 1. Exibe a mensagem de sucesso com o alert()
        alert("✅ Compra finalizada com sucesso! Total pago: R$ " + currentTotal.toFixed(2));
        
        // 2. Limpa o carrinho (lógica de negócios no Model)
        this.model.clearCart(); 

        // 3. Atualiza o View (mostra o carrinho vazio)
        this.updateView();
    }
}