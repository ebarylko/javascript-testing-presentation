
const homeMessage = "Welcome to Weatherme, your friendly neighbourhood weather app."

describe('Homepage', ()=> {
    it( 'should display the welcome message' , () => {
        cy.visit("localhost:3006")
        cy.get('[data-testid = "welcome-message"]').should('have.text', homeMessage)
    })
})