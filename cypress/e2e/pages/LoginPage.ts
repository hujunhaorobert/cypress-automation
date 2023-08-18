class LoginPage {
    // Demo using cypress-testing-library
    static readonly usernameInputByPlaceholderText = "Username";
    static readonly passwordInputByPlaceholderText = "Password";

    // Regular UI element locator by CSS locator
    static readonly usernameInput = "#user-name";
    static readonly passwordInput = "#password";
    static readonly loginBtn = "#login-button";
    static readonly errorMessage = "h3[data-test='error']";
    static readonly errorAlertCloseIcon = '.error-button';
    static readonly closeIcons = "svg";

  static submitLogin(username: string, password: string){
    // Demo using cypress-testing-library
    cy.findByPlaceholderText(this.usernameInputByPlaceholderText).type(username);
    cy.findByPlaceholderText(this.passwordInputByPlaceholderText).type(password);

    // Regular UI element locator by CSS locator
    // cy.get(this.usernameInput).type(username);
    // cy.get(this.passwordInput).type(password);
    cy.get(this.loginBtn).click();
  }
}

export default LoginPage;
