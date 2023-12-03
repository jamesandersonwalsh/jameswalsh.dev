describe('navigation smokescreen', () => {
  before(() => {
    cy.visit('/')
  })

  it('navigates top nav items', () => {
    cy.get('[data-testid="blog-nav-item"]').click()

    cy.url().should('include', '/posts')
    cy.get('h1').contains('Latest Blog Posts')

    cy.get('[data-testid="about-nav-item"]').click()
    cy.url().should('include', '/about')
    cy.get('h1').contains(`I'm James`)

    cy.get('[data-testid="stack-nav-item"]').click()
    cy.url().should('include', '/stack')
    cy.get('h1').contains(`Technology Tools I Recommend & Use`)

    cy.get('[data-testid="portfolio-nav-item"]').click()

    cy.url().should('include', '/projects')
    cy.get('h1').contains(`Things I've Helped Build That`)
  })
})
