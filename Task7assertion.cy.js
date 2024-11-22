describe("demo for implicit assertion", function () {
  it("implicit assertion", function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //should
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url().should("include", "orangehrmlive.com");
    cy.url().should("contain", "opensource");
    cy.url().should("not.contain", "close");

    //and
    cy.url()
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("include", "orangehrmlive.com")
      .and("contain", "opensource")
      .and("not.contain", "close");
  });
  it("explicit assertion", function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expName = "John1 Doe1";
    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();
      //BOD
      expect(actName).to.equal(expName);

      //TDD
      assert.equal(actName, expName);
    });
  });
});
