describe("Handling windows tab", () => {
  it("Handling new Browser Tab", function () {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").invoke("removeAttr", "target").click();
    cy.url().should("include", "/windows/new");
    cy.get("h3").should("have.text", "New Window");
  });
});
