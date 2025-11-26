import CartModel from './model/CartModel.js';
import CartView from './view/CartView.js';
import CartController from './controller/CartController.js';

// Inicializa a aplicação quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    const appModel = new CartModel();
    const appView = new CartView();
    
    // Inicia o Controlador, ligando as três partes
    new CartController(appModel, appView);
});