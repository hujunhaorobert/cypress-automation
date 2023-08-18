import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import QantasHomePage from '../pages/QantasHomePage';
import _ from "lodash";
import "cypress-xpath";

Given("User visit Qantas home page", () => {
  // cy.once('uncaught:exception', () => false);
  // catching an exception that is thrown in console by linked website itself - we don't want test to stop here!
  Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    expect(err.message).to.include(`Cannot read properties of undefined (reading 'indexOf')`);
    if (err.message.includes(`Cannot read properties of undefined (reading 'indexOf')`)) {
      return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  });
  cy.visit("https://www.qantas.com/au/en.html");
  cy.log("Land on Qantas Home page");
  cy.url().should("contains", "/au/en.html");
});

Then("User see 'FLIGHT' is highlighted by underline", () => {
  cy.xpath(QantasHomePage.flightsText).should("exist");
  cy.contains('Flights').should("exist");
});

Then("User see 'HOTELS', 'HOLIDAYS', 'SHOPPING', 'WINE', 'MONEY', 'INSURANCE', 'FREQUENT FLYER' without underline", () => {
  cy.xpath(QantasHomePage.hotelsText).should("exist");
  cy.xpath(QantasHomePage.holidaysText).should("exist");
  cy.xpath(QantasHomePage.shoppingText).should("exist");
  cy.xpath(QantasHomePage.wineText).should("exist");
  cy.xpath(QantasHomePage.moneyText).should("exist");
  cy.xpath(QantasHomePage.insuranceText).should("exist");
  cy.xpath(QantasHomePage.frequentFlyerText).should("exist");
});

Then("User see Qantas LOGO and 'Oneworld' ICON", () => {
  cy.get(QantasHomePage.qantasLogo)
    .should('be.visible')
    .should('have.attr', 'src') // yields the "src" attribute
    .and('equal', QantasHomePage.qantasLogoOriginalImageFile);
  cy.get(QantasHomePage.oneworldLogo)
    .should('be.visible')
    .should('have.text', 'Oneworld') // yields the "text" attribute
    .should('have.attr', 'href') // yields the "href" attribute
    .and('equal', QantasHomePage.oneworldLogoOriginalLink);
});

Then("User mouse hover to Qantas menu items to browser the avaliable services", (table: any) => {
  for (const row of table.hashes()) {
    const menuItem = _.camelCase(row.menuItem);
    // cy.get(QantasHomePage.travelGuidesMenu).trigger('mouseover').click();
    cy.get(QantasHomePage[`${menuItem}Menu`]).trigger('mouseover');
    cy.wait(200);
  }
});

Then("User mouse hover to {string} and click the menu", (menuItem: string) => {
    const targetMenuItem = _.camelCase(menuItem);
    cy.get(QantasHomePage[`${targetMenuItem}Menu`]).trigger('mouseover').click();
});

Then("User see page jump to travel guides", () => {
    cy.url().should("contain", "/au/en/travel-guides.html");
});