describe('Mousehover Handling',()=>{
    it('Mousehover test',()=>{
        cy.visit("http://qa.circulus.io/login.aspx")
        cy.get('#TxtEmail').type('nkasu@xeno.com')
        cy.get('#TxtPassword').type('xeno@123')
        cy.get('#BtnLogin').click()
        cy.wait(5000)
        cy.get('#cpBody_divAccountant > table > tbody > tr:nth-child(7) > td > div > strong > a').click()
        cy.wait(5000)
        //cy.get('#menu_aSearchPayments').invoke('show')
        //cy.contains('Search Payments').click({force:true})
        cy.get('#cpBody_divqlbillentry').click()
        //cy.get('div.input-group-btn').find('input[type=file]').eq(0).selectFile('cypress\\fixtures\\CR_Invoice.pdf',{force:true})
        cy.get('div.input-group-btn').eq(0).trigger('click',{force:true})
        cy.wait(2000)
        //cy.get('#cpBody_divFileUpload').attachFile('CR_Invoice.pdf',{force:true})
        //cy.get('input[type=file]').attachFile('CR_Invoice.pdf',{force:true})
        cy.get('input[type=file]').eq(0).selectFile('cypress\\fixtures\\CR_Invoice.pdf',{force:true})
        cy.wait(3000)
        cy.get('#cpBody_lbtnUploadFile').click()
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#menu_aSearchPayment').click({force:true});
        cy.get('#cpBody_advSearch1').click();
        cy.get('#cpBody_ddlPayeeList_btn_comb').click();
        cy.get('[data-value="529799-Vendor"]').click();
        cy.get('#cpBody_btn_search').click();
        /* ==== End Cypress Studio ==== */
    })
})