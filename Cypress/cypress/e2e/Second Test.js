describe('Second Test', () => {
  beforeEach(() => {
    // Visit the Domino's login page
    cy.visit('https://www.dominos.bg/');

    cy.wait(5000)

    cy.get('#onesignal-slidedown-cancel-button').click()

    cy.get(':nth-child(4) > .button').click()
    
    cy.get('#login').click()

    cy.wait(2000)
    
    cy.get('.popup-content > [data-rel="popup-login"] > .popup-login_wrapper > :nth-child(2) > form > .margin-top-25 > #login-email').type('polq.d.dimitrova@gmail.com')

    cy.get('.popup-content > [data-rel="popup-login"] > .popup-login_wrapper > :nth-child(2) > form > :nth-child(2) > #login-pass').type('dominoparola')

    cy.get('.popup-content > [data-rel="popup-login"] > .popup-login_wrapper > :nth-child(2) > form > .button').click()
  });

  it('Order Pizza', () => {
    
    cy.get('#logo-wrapper').click()

    cy.wait(2000)

    cy.scrollTo(0, 500) // Scroll the window 500px down

    cy.get(':nth-child(2) > .box > .offer-wrapper > .button').click()
    
    cy.wait(3000)

    cy.get('.popup-content > [data-rel="order-steps"] > #Option_step1 > .margin-top-25 > .row > :nth-child(1) > .step1-choice > .col-xs-12').click()

    cy.wait(2000)

    cy.get('#step2-add-address-btn').click()
    
    cy.get('#address_autocomplete').type('улица „Цар Калоян“, Бургас, България{enter}')

    cy.get('[data-place="EkTRg9C70LjRhtCwIOKAntCm0LDRgCDQmtCw0LvQvtGP0L3igJwsINCR0YPRgNCz0LDRgSwg0JHRitC70LPQsNGA0LjRjyIuKiwKFAoSCZ_pIOa8lKZAESsusi_G52_2EhQKEgmRnfz5ZpKmQBHwTb9pEqAABA"]').click()

    cy.get('#street_number').type('15')

    cy.get('#postal_code').type('8000')

    cy.get('#phone').type('0897423720')

    cy.get('#floor').type('2')

    cy.get('.add-address-btn').click()

    cy.wait(5000)
  });
});
