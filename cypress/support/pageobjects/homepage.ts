class HomePage{
    getName(){
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getGender(){
        return cy.get('select')
    }
    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }
    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    getAddBills(){
        return cy.get('#cpBody_divqlbillentry')
    }


}

export default HomePage;