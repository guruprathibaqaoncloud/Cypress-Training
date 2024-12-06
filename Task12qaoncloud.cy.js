Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
require("cypress-xpath");
describe("QAoncloud Part1", () => {
  it("HomePage, Header, banner", () => {
    cy.visit("https://www.qaoncloud.com/");
    //Banner Logo Check
    cy.xpath("//img[@title='QAonCloud Logo']").should("be.visible");
    //Hostspot contents
    cy.xpath("//div[@class='hotspot-content-overlay']").should("be.visible");
  });

  it("We Love To Help Craft Quality Software", () => {
    cy.visit("https://www.qaoncloud.com/");
    cy.wait(2000);
    cy.scrollTo(0, 1000);
    cy.contains("We Love To Help Craft Quality Software").should("be.visible");
    //assert that below property
    cy.xpath(
      "//section[@class='elementor-section elementor-top-section elementor-element elementor-element-a93589e elementor-section-full_width elementor-section-height-min-height elementor-section-stretched elementor-section-height-default elementor-section-items-middle']//div[@class='elementor-container elementor-column-gap-default']"
    ).should("be.visible");
  });
  it("What QAonCloud Offers", () => {});

  it("Why QAonCloud", () => {
    cy.visit("https://www.qaoncloud.com/");
    cy.wait(2000);
    //   cy.contains('why QAonCloud').should('be.visible')
    //assert below property
    //    cy.wait(2000)
    cy.xpath(
      "//section[@class='elementor-section elementor-top-section elementor-element elementor-element-3cd64ed elementor-section-height-min-height elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-items-middle']//div[@class='elementor-container elementor-column-gap-default']"
    ).should("be.visible");
  });

  it("How We Help", () => {});
  it(" Key Milestones", () => {});
  it(" Blogs and Resources", () => {});
  it("  Footer", () => {
    cy.visit("https://www.qaoncloud.com/");
    cy.wait(2000);
    cy.scrollTo("bottom");
    //company
    cy.xpath("//h2[normalize-space()='Company']").should("be.visible");
    //about us
    cy.xpath(
      "//body/div[contains(@class,'ekit-template-content-markup ekit-template-content-footer ekit-template-content-theme-support')]/div[contains(@class,'elementor elementor-537')]/section[contains(@class,'elementor-section elementor-top-section elementor-element elementor-element-b046965 elementor-section-boxed elementor-section-height-default elementor-section-height-default')]/div[contains(@class,'elementor-container elementor-column-gap-default')]/div[contains(@class,'elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6cc1bd5 ot-flex-column-vertical')]/div[contains(@class,'elementor-widget-wrap elementor-element-populated')]/section[contains(@class,'elementor-section elementor-inner-section elementor-element elementor-element-2033179 elementor-section-full_width elementor-section-height-default elementor-section-height-default')]/div[contains(@class,'elementor-container elementor-column-gap-default')]/div[contains(@class,'elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6d244c4 ot-flex-column-vertical')]/div[contains(@class,'elementor-widget-wrap elementor-element-populated')]/div[contains(@class,'elementor-element elementor-element-6f23676 elementor-widget elementor-widget-elementskit-page-list')]/div[contains(@class,'elementor-widget-container')]/div[contains(@class,'ekit-wid-con')]/div[contains(@class,'elementor-icon-list-items')]/div[1]"
    ).should("be.visible");
    //How its work
    cy.xpath("//span[contains(text(),'How it works')]").should("be.visible");
    //Quick Links
    cy.xpath("//h2[normalize-space()='Quick Links']").should("be.visible");
  });
});
