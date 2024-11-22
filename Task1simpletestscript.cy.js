describe("My First Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.wait(3000);
    cy.get("#signin2").click();
    cy.wait(2000);
    cy.get("#sign-username").type("code2testguru");
    cy.get("#sign-password").type("Password");
    cy.get("button[onclick='register()']").click();
  });
});
