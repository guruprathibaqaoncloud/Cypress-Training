context("page responsiveness", () => {
  it("Facebook login page", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-samsung-note9", () => {
    cy.viewport("samsung-note9");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-macbook-16", () => {
    cy.viewport("macbook-16");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-ipad-2", () => {
    cy.viewport("ipad-2");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-ipad-mini", () => {
    cy.viewport("ipad-mini");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-iphone-xr", () => {
    cy.viewport("iphone-xr");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-samsung-s10", () => {
    cy.viewport("samsung-s10");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-iphone-3", () => {
    cy.viewport("iphone-3");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-iphone-4", () => {
    cy.viewport("iphone-4");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-macbook-13", () => {
    cy.viewport("macbook-13");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
  it("Facebook login page-macbook-11", () => {
    cy.viewport("macbook-11");
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
  });
});
