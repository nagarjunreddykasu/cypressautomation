import HomePage from '../support/pageobjects/homepage'
describe('File Upload',()=>{
    let data:any;
    before(()=>{
        cy.fixture('login').then((jsonData)=>{
            data=jsonData
        })
    })

    it('File Upload testing',()=>{
        //To Create object for HomePage
        const homePage=new HomePage()
        cy.navigate()
        cy.login(data.username,data.password)
        cy.contains(data.company).click()
        homePage.getAddBills().click()
        cy.get('div.input-group-btn').eq(0).trigger('click',{force:true})
        cy.get('input[type=file]').eq(0).selectFile('cypress\\fixtures\\CR_Invoice.pdf',{force:true})
        cy.get('#cpBody_lbtnUploadFile').click()
        //cy.title().should()
        //cy.xpath('').click()
        
    })
})