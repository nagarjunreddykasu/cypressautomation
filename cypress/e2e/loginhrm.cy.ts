describe('OrangeHRM Login',()=>{
    it('Orange hrm login validation',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath("//input[@name='username']").type('Admin')
        cy.xpath("//input[@name='password']").type('admin123')
        cy.xpath("//button[@type='submit']").click()
        cy.get('.oxd-userdropdown-tab').find('i').click()
        cy.contains('Logout').click()

    })
})