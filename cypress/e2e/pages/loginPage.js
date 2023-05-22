class LoginPage {

    login = {
        email: () => cy.get('[id="input-email"]').should('exist'),
        password: () => cy.get('[id="input-password"]').should('exist'),
        submit_button: () => cy.get('[type="submit"]').should('exist'),
    }

    launchURL() {
        cy.visit(Cypress.env('baseURL'))
    }

    enterEmail(email) {
        this.login.email().type(email);
        return this;
    }

    enterPassword(password) {
        this.login.password().type(password);
        return this;
    }

    clickOnSubmitButton() {
        this.login.submit_button().eq(0).click();
        return this;
    }

    verifyPageTitle(title) {
        return cy.title().should("eq", title);
    }
}
export default LoginPage;