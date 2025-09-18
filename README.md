# Saucy-Cypress-Tests-QA
## 🧪 Projeto de Testes Automatizados com Cypress

Este repositório contém testes automatizados desenvolvidos em **Cypress** para validação do fluxo de compra no site [Sauce Demo](https://www.saucedemo.com/).

## 🚀 Tecnologias utilizadas
- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- JavaScript (ES6)

## 📂 Estrutura do Projeto
cypress/
e2e/
compra.cy.js # Testes de fluxo de compra
fixtures/ # Massa de dados (usuários, produtos, etc.)
support/ # Comandos customizados e configurações globais
## 🔧 Pré-requisitos
- Node.js instalado (>= 16)
- NPM ou Yarn

## ▶️ Como rodar os testes
1. Clonar o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
2. Instalar as dependências:
   ```bash
   npm install

3. Executar os testes no modo interativo:
   ```bash
   npx cypress open

4. Executar os testes em modo headless:
 ```bash
   npx cypress run
```
##✅ Cenários implementados

-Login com usuário válido

-Adição de produto ao carrinho

-Acesso ao carrinho

-Checkout com preenchimento de dados

-Validação da finalização do pedido

##📌 Melhorias futuras

-Criar testes para login inválido

-Cobrir cenários de erro no checkout

-Parametrizar massa de dados com fixtures ou faker

-Criar comandos customizados para login e fluxo de compra

👩‍💻 Desenvolvido por Taynara Santos
