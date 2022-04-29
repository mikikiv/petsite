describe('Dark Mode test', function () {
    this.beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('can switch to dark mode', function () {
        cy.get('html').should('have.attr','data-theme','light')
        cy.get('.toggleButton_node_modules-\\@docusaurus-theme-classic-lib-next-theme-ColorModeToggle-styles-module').click()
        cy.get('html').should('have.attr','data-theme','dark')
    })
    it('can link to the guide', function () {
        cy.contains('Guide').click()
        cy.url().should('include','/docs')
    })
})