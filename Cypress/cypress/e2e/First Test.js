describe('First Test', () => {
  it('Visit Linkedin Site By Google', () => {
    cy.visit('https://google.com')

    cy.get('#L2AGLb > .QS5gu').click()

    cy.get('.gLFyf').type('Linkedin{enter}')

    cy.contains('LinkedIn: Log In or Sign Up').click()
  })
})
