## 🛍️ Carrinho de Compras em JavaScript (MVC)

Este projeto implementa um carrinho de compras simples e funcional utilizando **HTML**, **CSS** e **JavaScript**, seguindo o padrão de arquitetura **Model-View-Controller (MVC)** para uma organização de código robusta e de fácil manutenção.

---

## 🎯 Objetivo

O objetivo principal é demonstrar o uso do **CRUD (Create, Read, Update, Delete)** na gestão de itens em um carrinho de compras, aplicando o princípio de separação de responsabilidades do MVC:

- **Model (`CartModel.js`):** Gerencia o estado dos dados (itens do carrinho) e a lógica de negócios (calcular total, persistir no `localStorage`).
- **View (`CartView.js`):** Lida com a interface do usuário (DOM), a exibição dos dados e a captura de eventos.
- **Controller (`CartController.js`):** Atua como intermediário, recebendo ações do View, manipulando o Model e instruindo o View a se atualizar.

---

## ⚙️ Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **CSS3:** Estilização básica (localizado em `css/style.css`).
- **JavaScript (ES6 Modules):** Lógica principal, implementando o padrão MVC e as operações CRUD.
- **`localStorage`:** Utilizado no Model para persistir os dados do carrinho entre as sessões do navegador.

---

## 📂 Estrutura de Pastas

A organização do código reflete a arquitetura MVC:
O código do seu README.md completo, formatado em Markdown, é o seguinte:

Markdown

## 🛍️ Carrinho de Compras em JavaScript (MVC)

Este projeto implementa um carrinho de compras simples e funcional utilizando **HTML**, **CSS** e **JavaScript**, seguindo o padrão de arquitetura **Model-View-Controller (MVC)** para uma organização de código robusta e de fácil manutenção.

---

## 🎯 Objetivo

O objetivo principal é demonstrar o uso do **CRUD (Create, Read, Update, Delete)** na gestão de itens em um carrinho de compras, aplicando o princípio de separação de responsabilidades do MVC:

- **Model (`CartModel.js`):** Gerencia o estado dos dados (itens do carrinho) e a lógica de negócios (calcular total, persistir no `localStorage`).
- **View (`CartView.js`):** Lida com a interface do usuário (DOM), a exibição dos dados e a captura de eventos.
- **Controller (`CartController.js`):** Atua como intermediário, recebendo ações do View, manipulando o Model e instruindo o View a se atualizar.

---

## ⚙️ Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **CSS3:** Estilização básica (localizado em `css/style.css`).
- **JavaScript (ES6 Modules):** Lógica principal, implementando o padrão MVC e as operações CRUD.
- **`localStorage`:** Utilizado no Model para persistir os dados do carrinho entre as sessões do navegador.

---

## 📂 Estrutura de Pastas

A organização do código reflete a arquitetura MVC:

CARRINHO-DE-COMPRAS/ ├── index.html # Estrutura principal da aplicação ├── css/ │ └── style.css # Estilização da interface └── js/ ├── controller/ │ └── CartController.js # 🕹️ Lógica de controle e orquestração ├── model/ │ └── CartModel.js # 🧠 Gerenciamento de dados (CRUD) ├── view/ │ └── CartView.js # 🖼️ Manipulação e renderização do DOM └── main.js # Ponto de entrada (Inicializa o Controller)

---

## 📦 Funcionalidades (CRUD)

O carrinho de compras suporta as seguintes operações:

| Operação       | Ação do Usuário                                                     | Arquivo Envolvido                                           |
| :------------- | :------------------------------------------------------------------ | :---------------------------------------------------------- |
| **C** (Create) | Clicar em "Adicionar ao Carrinho"                                   | `CartModel.addItem()`                                       |
| **R** (Read)   | Visualizar produtos e itens do carrinho                             | `CartModel.getCart()` e `CartView.renderCart()`             |
| **U** (Update) | Clicar nos botões **`+`** ou **`-`** na quantidade                  | `CartModel.updateQuantity()`                                |
| **D** (Delete) | Clicar no botão **`X`** (Remover) ou reduzir a quantidade para zero | `CartModel.removeItem()`                                    |
| **Checkout**   | Clicar em "Finalizar Compra"                                        | `CartController.handleCheckout()` e `CartModel.clearCart()` |

---

## ▶️ Como Rodar o Projeto

Devido ao uso de **módulos ES6 (`import`/`export`)** no `main.js`, este projeto **deve** ser executado em um **servidor web local** para evitar erros de CORS no navegador.

### Opção 1: Usando a Extensão Live Server (Recomendado para VS Code)

1.  Instale a extensão **Live Server** (por Ritwick Dey) no VS Code.
2.  Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

### Opção 2: Usando um Servidor HTTP Local (Python)

1.  Abra o terminal na pasta raiz do projeto (`CARRINHO-DE-COMPRAS/`).
2.  Execute o comando (para Python 3):
    ```bash
    python -m http.server
    ```
3.  Acesse `http://localhost:8000` no seu navegador.
