describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('[data-test-id="Skywalker,Anakin"]').should(
      "have.text",
      "Skywalker,Anakin"
    );
  })
})