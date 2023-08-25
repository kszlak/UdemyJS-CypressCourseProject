describe('Handling tables', function()
{
    it('Validate table value', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>
        {
            const text = $el.text()
            if (text.includes('Python'))
            {
                //move to sibling with next() - works only on get
                //we need to resolve a promise with then() as text is a jquery object
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})