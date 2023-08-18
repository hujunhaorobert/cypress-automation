import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../pages/LoginPage';

Given("A web browser is at the saucelabs login page", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username: string, password: string) => {
  LoginPage.submitLogin(username,password);
});

When("A user provides incorrect credentials username:{string},password:{string} and clicks on the login button", (username: string, password: string) => {
    cy.log(username);
    cy.log(password);
    LoginPage.submitLogin(username, password);
});

Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});

Then("The error message {string} is displayed", (errorMessage: string) => {
  cy.get(LoginPage.errorMessage).should("have.text", errorMessage);
});

Then("The error message {string} is NOT displayed", (errorMessage: string) => {
  // cy.get(LoginPage.errorMessage).should("exist", errorMessage);
  cy.get(LoginPage.errorMessage).should("not.exist", errorMessage);
});

Then("User close the error message alert", () => {
  cy.get(LoginPage.errorAlertCloseIcon).click();
});

Then("All red close ICONs are gone", () => {
  cy.get(LoginPage.closeIcons).should("not.exist");
});
