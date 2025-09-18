describe('template spec', () => {
  //Acessar o site.
  beforeEach('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    //Fazer o login com usuário e senha corretas.
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('contain', "Products")
  })
  //Adicionar um produto no carrinho
   it('passes', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    // Verificar se o produto foi adicionado, ao invés de aparecer Add to cart vai aparecer remove
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain', "Remove")
    //Acessar o carrinho
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="title"]').should('contain', "Your Cart")
    //Continuar o fluxo para a finalização da venda clicando em Checkout.
    cy.get('[data-test="checkout"]').click()
    //Preenchimento dos dados do comprador
    cy.get('[data-test="title"]').should('contain', "Checkout: Your Information")
    cy.get('[data-test="firstName"]').type("Taynara")
    cy.get('[data-test="lastName"]').type("Santos")
    cy.get('[data-test="postalCode"]').type("34.000-000")
    cy.get('[data-test="continue"]').click()
    //Verificar se o pedido está correto
    cy.get('[data-test="finish"]').click()
    //Mensagem de finalização do pedido
    cy.get('[data-test="complete-header"]').should('contain', "Thank you for your order!")
  })
})