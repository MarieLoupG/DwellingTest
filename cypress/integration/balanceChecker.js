describe('Check Balance: errors and functions', () => {

    before(() => {
        cy.visit('http://localhost:3000')
    })
    afterEach(() => {
        cy.get('[data-cy=cardNumberClear]').click()
    })

    it('Visits the app', () => {
        cy.contains('Balance checker')
        cy.get('[data-cy=cardNumberSubmit]').click()
        cy.contains('Invalid number')
    })

    it('Cannot type letters', () => {
        cy.get('[data-cy=cardNumberField]')
            .type('aaaqqqqsssjkdhjfkhwk')
            .should('have.value', '')
    })

    it('Cannot type special caracters', () => {
        cy.get('[data-cy=cardNumberField]')
            .type(',.><{}(?-=+]@&)')
            .should('have.value', '')
    })

    it('Can clear form', () => {
        cy.get('[data-cy=cardNumberField]')
            .type('111')
        cy.get('[data-cy=cardNumberClear]').click()
        cy.get('[data-cy=cardNumberField]').should('have.value', '')
    })

    it('Cannot type more than 16 numbers', () => {
        cy.get('[data-cy=cardNumberField]')
            .type('111111111111111111111111')
            .should('have.value', '1111 1111 1111 1111')
    })

    it('Check error with en empty field', () => {
        cy.get('[data-cy=cardNumberSubmit]').click()
        cy.contains('Invalid number')
    })

    it('Can type an invalid card number in the field and get an error', () => {
        cy.get('[data-cy=cardNumberField]')
            .type('111')
        cy.get('[data-cy=cardNumberSubmit]').click() //cardNumberSubmit
        cy.contains('Invalid number')

    })

})

describe('Check Balance: can check balance', () => {

    before(() => {
        cy.visit('http://localhost:3000')
    })
    afterEach(() => {
        cy.get('[data-cy=cardNumberClear]').click()
    })

    it('Can type a valid card number in the field and get 0', () => {
        cy.get('[data-cy=cardNumberField]')
            .type('11111111111111111111111')
        cy.get('[data-cy=cardNumberSubmit]').click()
        cy.contains('Your balance is $0')
    })

    it('Can type a valid card number in the field and get the balance', () => {
        cy.get('[data-cy=cardNumberField]')
            .type('22222222222222222222')
        cy.wait(200)
        cy.get('[data-cy=cardNumberSubmit]').click()
        cy.contains('Your balance is $24')
    })
})