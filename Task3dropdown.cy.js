describe("handle dropdown", () => {
  it("dropdown with Selection", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country").select("Algeria");
    cy.get("#zcf_users").select("Do you sell online? *");
  });

  it("Dropdown without select", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_state-container").click();
    cy.get(".select2-search__field").type("Assam");
  });
  it("Auto suggest dropdown", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Delhi");
    cy.get(".suggestion-title").contains("Delhi Sultanate").click();
  });
  it("Dynamic Dropdown", () => {
    cy.visit("https://www.google.co.in/");
    cy.get("textarea[name='q']").type("Cypress Automation");
    cy.get("#Alh6id .OBMEnb ul li").contains("cypress automation").click();
  });
});
