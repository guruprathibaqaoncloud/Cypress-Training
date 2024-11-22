it("google.test", function () {
  cy.visit("https://google.com");
  cy.get('[name="q"]').type("Automation testing").type("(enter)");
});
