Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("QaonCloud", function () {
  it("Header", function () {
    cy.visit("https://www.qaoncloud.com/");
    cy.get(".ekit-menu-nav-link ekit-menu-dropdown-toggle");
  });
});
