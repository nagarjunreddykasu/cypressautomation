describe('Arrays test',()=>{
    it('Arrays test1',()=>{
        let age:number[]=[15,25,30,32,35,40]
        let even:number[]=age.filter(num=>(num%2)==0)
        cy.log('Even Numbers: '+even)
    })
})

