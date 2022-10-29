describe('Handling datadriven',()=>{
    let data:any;
    before(()=>{
        cy.fixture('example').then((jsonData)=>{
            data=jsonData
        })
    })

    it('datadriven test',()=>{
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        //cy.get('input[name="name"]:nth-child(2)').type('Aadhya Kasu')
        //cy.get('select').select('Female')
        //using fixture (datadriven)
        cy.get('input[name="name"]:nth-child(2)').type(data.name)
        cy.get('select').select(data.gender)

        cy.get(':nth-child(4) > .ng-untouched').should('have.value',data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength',2)
        cy.get('#inlineRadio3').should('be.disabled')

        cy.get(':nth-child(2) > .nav-link').click()
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