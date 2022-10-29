import HomePage from '../support/pageobjects/homepage'

describe('Handling datadriven',()=>{
    let data:any;
    before(()=>{
        cy.fixture('example').then((jsonData)=>{
            data=jsonData
        })
    })

    it('datadriven test',()=>{
        const homePage=new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        //cy.get('input[name="name"]:nth-child(2)').type('Aadhya Kasu')
        //cy.get('select').select('Female')
        //using fixture (datadriven)
        homePage.getName().type(data.name)
        homePage.getGender().select(data.gender)

        homePage.getTwoWayDataBinding().should('have.value',data.name)
        homePage.getName().should('have.attr','minlength',2)
        homePage.getEntrepreneur().should('be.disabled')

        homePage.getShopTab().click()
        /*cy.get('h4.card-title').each(($element,index,$list)=>{
            if($element.text().includes('Blackberry')){
                cy.get('button.btn.btn-info').eq(index).click()
            }
        })*/

        //cy.selectProduct('Blackberry')
        data.productName.forEach((element:string)=>{
           cy.selectProduct(element)
        })

    })
})