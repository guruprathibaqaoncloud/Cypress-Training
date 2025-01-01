describe("Capture screenshot and Videos", () => {
  it("Takeing screenshot using Screenshot command", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.wait(3000);

    cy.screenshot("1 Login page of OrangeHRM");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.wait(3000);

    cy.screenshot("2 Login page with filled inputs");
    cy.get(".oxd-button").click();
    cy.wait(3000);
    cy.screenshot("3 After Login OrangeHRM Dashboard");
    cy.wait(3000);

    cy.get(".oxd-brand-banner > img").screenshot(
      "4 Logo of OrangeHRM Dashboard"
    );
  });
  it("Screenshot and Videos on Testfailure", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin");
    cy.get(".oxd-button").click();

    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });
});
