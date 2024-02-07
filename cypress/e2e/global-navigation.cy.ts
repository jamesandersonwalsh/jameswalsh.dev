describe('global navigation smokescreen', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigates top nav items', () => {
    cy.get('[data-testid="blog-top-nav-item"]').click()

    cy.url().should('include', '/posts')
    cy.get('h1').contains('Latest Blog Posts')

    cy.get('[data-testid="about-top-nav-item"]').click()
    cy.url().should('include', '/about')
    cy.get('h1').contains(`I'm James`)

    cy.get('[data-testid="stack-top-nav-item"]').click()
    cy.url().should('include', '/stack')
    cy.get('h1').contains(`Technology Tools I Recommend & Use`)

    cy.get('[data-testid="portfolio-top-nav-item"]').click()
    cy.url().should('include', '/projects')
    cy.get('h1').contains(`Things I've Helped Build That`)

    cy.get('[data-testid="rss-feed-top-nav-item"]').click()
    cy.url().should('include', '/rss.xml')
  })

  it('navigates the footer', () => {
    cy.get('[data-testid="blog-footer-nav-item"]').click()

    cy.url().should('include', '/posts')
    cy.get('h1').contains('Latest Blog Posts')

    cy.get('[data-testid="about-footer-nav-item"]').click()
    cy.url().should('include', '/about')
    cy.get('h1').contains(`I'm James`)

    cy.get('[data-testid="stack-footer-nav-item"]').click()
    cy.url().should('include', '/stack')
    cy.get('h1').contains(`Technology Tools I Recommend & Use`)

    cy.get('[data-testid="portfolio-footer-nav-item"]').click()

    cy.url().should('include', '/projects')
    cy.get('h1').contains(`Things I've Helped Build That`)
  })

  describe('when on a mobile phone', () => {
    beforeEach(() => {
      cy.viewport('iphone-se2')
    })

    it('navigates the mobile drawer', () => {
      cy.get('[data-testid="mobile-menu-trigger"]').click()
      cy.get('[data-testid="blog-mobile-nav-item"]').click()
      cy.url().should('include', '/posts')
      cy.get('h1').contains('Latest Blog Posts')

      cy.get('[data-testid="mobile-menu-trigger"]').click()
      cy.get('[data-testid="about-mobile-nav-item"]').click()
      cy.url().should('include', '/about')
      cy.get('h1').contains(`I'm James`)

      cy.get('[data-testid="mobile-menu-trigger"]').click()
      cy.get('[data-testid="stack-mobile-nav-item"]').click()
      cy.url().should('include', '/stack')
      cy.get('h1').contains(`Technology Tools I Recommend & Use`)

      cy.get('[data-testid="mobile-menu-trigger"]').click()
      cy.get('[data-testid="portfolio-mobile-nav-item"]').click()
      cy.url().should('include', '/projects')
      cy.get('h1').contains(`Things I've Helped Build That`)
    })
  })
})
