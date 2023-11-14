
const homeMessage = "Welcome to WeatherMe, your friendly neighbourhood weather app."

describe('Homepage', ()=> {
    it( 'should display the welcome message' , () => {
        cy.visit("/")
        cy.get('[data-testid = "welcome-message"]').should('have.text', homeMessage)
    })
})