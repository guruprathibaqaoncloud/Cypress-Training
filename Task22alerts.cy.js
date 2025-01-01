Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
///<reference types="Cypress" />

describe("alert methods", function () {
  beforeEach(function () {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    cy.url().should("include", "internet");
    cy.title().should("eq", "The Internet");
  });

  it("Alertbox", function () {
    cy.on("window:alert", function (alertmsg) {
      expect(alertmsg).eq("I am a JS Alert");
    });
    cy.wait(3000);
  });

  it("confirm alert-ok", function () {
    cy.on("window:confirm", function (conform) {
      expect(conform).eq("I am a JS Confirm");
    });

    cy.wait(3000);
  });

  it("confirm alert cancel", function () {
    cy.contains("Click for JS Confirm").click;
    cy.on("window:confirm", function (conformcancel) {
      return false;
    });

    cy.wait(3000);
  });

  it("Promptbox", function () {
    cy.window().then(function ($win) {
      cy.stub($win, "prompt").returns("Checking the prompt");
      cy.contains("Click for JS Prompt").click();
    });

    cy.wait(3000);
  });
});
