Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
/// <reference types ="Cypress" />

describe("Automation Demo site", function () {
  it.only("Register page", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.url().should("include", "automationtesting");
    cy.title().should("eq", "Register");
    cy.get(
      "#header > div > div > div > div.col-sm-3.col-xs-3.col-md-2 > a > img"
    ).should("be.visible");
    cy.contains("Automation Demo Site ").should("be.visible");
    cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input")
      .should("be.enabled")
      .type("Guru");
    cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input")
      .should("be.enabled")
      .type("Prathi");
    cy.get("#basicBootstrapForm > div:nth-child(2) > div > textarea")
      .should("be.enabled")
      .type("Pollachi");
    cy.get("input[type=email]").type("jaz@gmail.com");
    cy.get("input[type=tel]").type("1234567235");
    cy.get(
      "#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(1) > input"
    ).click();
    cy.get("#checkbox1")
      .check()
      .should("be.checked")
      .and("have.value", "Cricket");
    cy.get("#checkbox2")
      .check()
      .should("be.checked")
      .and("have.value", "Movies");
    cy.get("#checkbox2")
      .uncheck()
      .should("not.be.checked")
      .and("have.value", "Movies");
    cy.get("#imagetrgt").should("be.visible");
    const imagefile1 = "art.jpg";
    cy.get("#imagesrc").attachFile(imagefile1);
    cy.get("#imagetrgt").should("be.visible");

    // cy.get('input[type=checkbox]').check(['Cricket,Movies'])
    //cy.get('input[type=checkbox]').uncheck(['Movies'])
    cy.get("#Skills").select("Analytics").should("have.value", "Analytics");

    cy.get(".select2-selection__arrow").type("den");
    cy.get(".select2-search__field").type("{enter}");
    cy.get("#yearbox").select("1996");
    cy.get(
      "#basicBootstrapForm > div:nth-child(11) > div:nth-child(3) > select"
    ).select("January");
    cy.get("#daybox").select("18");
    cy.get("#firstpassword").type("1234");
    cy.get("#secondpassword").type("1234");

    // cy.get('#submitbtn').click()
    cy.get("#submitbtn").click();
    cy.on("window:alert", (variable) => {
      expect(variable).to.equal("Please select an item in the list");
    });
    // cy.contains('[value~=Please select an item in the list]').should('be.visible')
  });

  it("email id", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.url().should("include", "automationtesting");
    cy.title().should("eq", "Register");
    cy.get(
      "#header > div > div > div > div.col-sm-3.col-xs-3.col-md-2 > a > img"
    ).should("be.visible");
    cy.contains("Automation Demo Site ").should("be.visible");
    cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input")
      .should("be.enabled")
      .type("Vigneshwaran");
    cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input")
      .should("be.enabled")
      .type("Rajamani");
    cy.get("#basicBootstrapForm > div:nth-child(2) > div > textarea")
      .should("be.enabled")
      .type("Dharmapuri");
    cy.get("input[type=email]").type("jazon");
    cy.get("#submitbtn").click();
  });

  it("mobile number-alpha", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.url().should("include", "automationtesting");
    cy.title().should("eq", "Register");
    cy.get(
      "#header > div > div > div > div.col-sm-3.col-xs-3.col-md-2 > a > img"
    ).should("be.visible");
    cy.contains("Automation Demo Site ").should("be.visible");
    cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input")
      .should("be.enabled")
      .type("Vigneshwaran");
    cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input")
      .should("be.enabled")
      .type("Rajamani");
    cy.get("#basicBootstrapForm > div:nth-child(2) > div > textarea")
      .should("be.enabled")
      .type("Dharmapuri");
    cy.get("input[type=email]").type("jazon@gmail.com");
    cy.get("input[type=tel]").type("abcdefghas");
    cy.get("#submitbtn").click();
  });

  it("mobile number-min value", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.url().should("include", "automationtesting");
    cy.title().should("eq", "Register");
    cy.get(
      "#header > div > div > div > div.col-sm-3.col-xs-3.col-md-2 > a > img"
    ).should("be.visible");
    cy.contains("Automation Demo Site ").should("be.visible");
    cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input")
      .should("be.enabled")
      .type("Vigneshwaran");
    cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input")
      .should("be.enabled")
      .type("Rajamani");
    cy.get("#basicBootstrapForm > div:nth-child(2) > div > textarea")
      .should("be.enabled")
      .type("Dharmapuri");
    cy.get("input[type=email]").type("jazon@gmail.com");
    cy.get("input[type=tel]").type("1234567");
    cy.get("#submitbtn").click();
  });

  it("refresh", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.url().should("include", "automationtesting");
    cy.title().should("eq", "Register");
    cy.get("#Button1").click();
    cy.url().should("include", "automation");
    cy.title().should("eq", "Register");
  });

  it("automation testing", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.get("#footer > div > div > div:nth-child(1) > a").click();
    //  cy.url().should('include','automationtesting')
    // cy.title().should('eq','Register')
  });

  it("fb icon", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.get(
      "#footer > div > div > div.col-md-6.col-xs-6.col-sm-6.social.pull-right > a.link.facebook > span"
    ).click();
    // cy.url().should('include','facebook')
    // cy.title().should('eq','Automation Testing | Hyderabad  | Facebook')
  });

  it("twitter", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.get(
      "#footer > div > div > div.col-md-6.col-xs-6.col-sm-6.social.pull-right > a.link.twitter > span"
    ).click();
    // cy.url().should('include','twitter')
    // cy.title().should('eq','Krishna Sakinala (@krishnasakinala) / Twitter')
  });

  it("linked in", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.get(
      "#footer > div > div > div.col-md-6.col-xs-6.col-sm-6.social.pull-right > a.link.linkedin > span"
    ).click();
    //  cy.url().should('include','linked')
    //  cy.title().should('eq','LinkedIn: Log In or Sign Up')
  });

  it("google", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.get(
      "#footer > div > div > div.col-md-6.col-xs-6.col-sm-6.social.pull-right > a.link.google-plus > span"
    ).click();
    // cy.url().should('include','plus')
    //  cy.title().should('eq','Sign in - Google Accounts')
  });

  it("youtube", function () {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.get(
      "#footer > div > div > div.col-md-6.col-xs-6.col-sm-6.social.pull-right > a.link.youtube"
    ).click();
    //cy.url().should('include','youtube')
  });

  it("viewport-page responses", function () {
    cy.viewport("samsung-note9");
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.url().should("include", "automationtesting");
    cy.title().should("eq", "Register");
  });

  it("iphone", function () {
    cy.viewport("iphone-x");
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.url().should("include", "automationtesting");
    cy.title().should("eq", "Register");
  });
});
