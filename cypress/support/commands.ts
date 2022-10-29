/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

import LoginPage from '../support/pageobjects/loginpage'
const loginPage=new LoginPage();
Cypress.Commands.add('selectProduct', (productName:string) => { 
    cy.get('h4.card-title').each(($element,index,$list)=>{
      if($element.text().includes(productName)){
          cy.get('button.btn.btn-info').eq(index).click()
      }
    })
   })

Cypress.Commands.add('navigate',()=>{
    cy.visit("http://qa.circulus.io/login.aspx")
})

Cypress.Commands.add('login',(username:string,password:string)=>{
    loginPage.getUserName().type(username)
    loginPage.getPassword().type(password)
    loginPage.getSignInButton().click()
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }