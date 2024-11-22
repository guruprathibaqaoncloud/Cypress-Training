Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("testing using fixtures", () => {
  it("login", () => {
    let userdata;
    cy.fixture("fix1.json", { timeout: 5000 }).then((data) => {
      userdata = data;

      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );

      //username
      cy.get('input[placeholder="Username"]').type(userdata.username);
      //password
      cy.get('input[placeholder="Password"]').type(userdata.password);
      //button
      cy.get("button[type='submit']").click();
    });
  });
});
