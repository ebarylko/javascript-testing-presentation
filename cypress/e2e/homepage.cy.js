
const homeMessage = "Welcome to WeatherMe, your friendly neighbourhood weather app."

describe('Homepage', ()=> {
    it( 'displays the temperatures' , () => {
        cy.intercept(
            {method: 'GET', url: 'https://weather.visualcrossing.com/**'},
            {days: [{temp: 78}, {temp: 32.5}, {temp: -40}]}
        ).as('weatherData')
        cy.visit("/")
        cy.wait('@weatherData')
        cy.get('[data-testid = "welcome-message"]').should('have.text', homeMessage)
        cy.get('[data-testid = "temp"]')
            .then(($els) => {
                const elements = Cypress.$.makeArray($els)
                return elements.map((el) => parseFloat(el.innerText))
            })
            .should('deep.equal', [25.5, 0.2, -40.0])
    })
})