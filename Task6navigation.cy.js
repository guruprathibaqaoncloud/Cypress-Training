describe("Alerts", () => {
  it("Implicit Assertion", function () {
    // test step to launch a URL
    cy.visit("https://example.cypress.io/");

    // visit to the utility page
    cy.get("#navbar > :nth-child(1) > :nth-child(2) > a").click();

    // Navigate to the backward page
    cy.go("back");

    // Navigate to the fordward page
    cy.go("forward");
    cy.get("#_ > a").click();

    // Alternate command for navigate backward
    cy.go(-1);
    // Alternate command for navigate fordward
    cy.go(1);
  });
});
