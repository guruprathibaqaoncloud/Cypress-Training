Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("amazon", function () {
  it(" title", function () {
    cy.visit("https://www.amazon.in/ ");
    cy.title().should(
      "eq",
      "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
    );
    cy.url().should("include", "amazon");
  });
  it("home page", function () {
    cy.visit("https://www.amazon.in/ ");
    cy.get("#nav-hamburger-menu").should("be.visible");
    cy.get("#nav-xshop > a:nth-child(2)").should("be.visible");
    cy.get("#nav-xshop > a:nth-child(3)").should("be.visible");
    cy.get("#nav-xshop > a:nth-child(4)").should("be.visible");
    cy.get("#nav-xshop > a:nth-child(5)").should("be.visible");
    cy.get("#nav-xshop > a:nth-child(6)").should("be.visible");
  });

  it("sign up", function () {
    cy.visit("https://www.amazon.in/ ");
    cy.get("#nav-link-accountList").should("be.visible").click("center");
    cy.wait(1000);
    cy.contains("Create your Amazon account").click({ force: true });
    cy.wait(1000);
    cy.get("#ap_customer_name").type("Guru");
    cy.wait(1000);
    cy.get("#ap_phone_number").type("6382514353");
    cy.wait(1000);
    cy.get("#ap_password").type("guru@123");
    cy.wait(1000);
    cy.get("#continue").should("be.visible");
  });
  it("login", function () {
    cy.visit("https://www.amazon.in/");
    cy.get("#nav-link-accountList").should("be.visible").click("center");
    cy.wait(1000);
    cy.get("#ap_email").should("be.visible").type("6382514353");
    cy.get("#continue").should("be.visible").click("center");
    cy.get("#ap_password").clear();
    cy.get("#ap_password").should("be.visible").type("guru@123");
    cy.get("#signInSubmit").click({ force: true });
  });

  it.only("Search books", function () {
    cy.visit("https://www.amazon.in/");
    cy.url().should("include", "amazon");
    cy.title().should(
      "eq",
      "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
    );
    cy.get("#twotabsearchtextbox").type("Surf board for adults");
    cy.get("#nav-search-submit-button").click();
    // cy.title().should('eq','Amazon.in : surf board for adults')
    cy.go(-1);
    cy.get("#twotabsearchtextbox").type("velpari");
    cy.get("#nav-search-submit-button").click();
    //  cy.title().should('eq','Amazon.in : velpari')
    cy.go(-1);
    cy.get("#twotabsearchtextbox").type("acoustic guitar");
    cy.get("#nav-search-submit-button").click();
    //  cy.title().should('eq','Amazon.in : acoustic guitar')
    cy.go(-1);
  });
});
