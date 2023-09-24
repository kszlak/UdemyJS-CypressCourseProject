beforeEach(()=>  //mocha related hooks supported by Cucumber
{
    cy.fixture('example').then(function(data)
    {
        this.data=data
    })
})