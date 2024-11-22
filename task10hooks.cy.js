describe("My first test", function () {
  before(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("#customer_menu_top").click();
    cy.get("#loginFrm_loginname").type(Credentials.username);
    cy.get("#loginFrm_password").type(Credentials.password);
    cy.get('button[type="submit"][title="Login"]').click();
  });
  beforeEach(() => {
    cy.log("Test case execution has started");
  });
  afterEach(() => {
    cy.log("Test case execution has ended");
  });
  after(() => {
    cy.get(".side_account_list > :nth-child(10) > a").click();
  });
  it("Validate that the page contains the expected title", function () {
    cy.get(".maintext").should("contain", " My Account");
  });
});
