class LoginPage{
    getUserName(){
        return cy.get('#TxtEmail')
    }

    getPassword(){
        return cy.get('#TxtPassword')
    }

    getSignInButton(){
        return cy.get('#BtnLogin')
    }

}

export default LoginPage;