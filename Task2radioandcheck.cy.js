describe("My suites", () => {
  it("Checking radio button", () => {
    cy.visit("https://demo.guru99.com/test/radio.html");

    //Visibility of radio button
    cy.get("input[value='Option 1']").should("be.visible");
    cy.get("input[value='Option 2']").should("be.visible");

    //Selecting radio button
    cy.get("input[value='Option 1']").check().should("be.checked");
    cy.get("input[value='Option 2']").should("not.be.checked");

    cy.get("input[value='Option 2']").check().should("be.checked");
    cy.get("input[value='Option 1']").should("not.be.checked");
  });
  it("Checking check boxes", () => {
    cy.visit("https://demo.guru99.com/test/radio.html");

    //Visibility of checkbox
    cy.get("input[value='checkbox1']").should("be.visible");

    //Selecting single checkbox
    cy.get("input[value='checkbox1']").check().should("be.checked");

    //Unselecting single checkbox
    cy.get("input[value='checkbox1']").uncheck().should("not.be.checked");

    //Selecting all checkboxes
    cy.get("input[type='checkbox']").check().should("be.checked");

    //Unselecting all checkboxes
    cy.get("input[type='checkbox']").uncheck().should("not.be.checked");

    //Select first & last checkbox
    cy.get("input[type='checkbox']").first().check().should("be.checked");
    cy.get("input[type='checkbox']").last().check().should("be.checked");
  });
});
