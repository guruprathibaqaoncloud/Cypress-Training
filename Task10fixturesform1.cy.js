describe("Fixture", function () {
  beforeEach(function () {
    cy.fixture("my.json").then(function (data) {
      this.data = data;
    });
  });
  it("Negative case for login page", function () {
    cy.visit("https://mytestingthoughts.com/Sample/home.html");
    //first name
    cy.get("#contact_form > fieldset > div:nth-child(3) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.F_Name);
    cy.get(
      "#contact_form > fieldset > div:nth-child(3) > div > small:nth-child(2)"
    ).should("contain", "This value is not valid");
    //last name
    cy.get("#contact_form > fieldset > div:nth-child(4) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Last_Name1);
    cy.get(
      "#contact_form > fieldset > div:nth-child(4) > div > small:nth-child(2)"
    ).should("contain", "This value is not valid");
    //gender
    cy.get("#inlineRadioFemale")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Gender1);
    //hobbies
    cy.get("#exampleFormControlSelect2")
      .should("be.visible")
      .and("be.enabled")
      .select("Swimming");
    //deparment/office
    cy.get("#contact_form > fieldset > div:nth-child(7) > div > div > select")
      .should("be.visible")
      .and("be.enabled")
      .select("Department of Agriculture");
    //username
    cy.get("#contact_form > fieldset > div:nth-child(8) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Username1);
    cy.get(
      "#contact_form > fieldset > div:nth-child(8) > div > small:nth-child(2)"
    ).should("contain", "This value is not valid");
    //password
    cy.get("#contact_form > fieldset > div:nth-child(9) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Password1);
    //confirm password
    cy.get("#contact_form > fieldset > div:nth-child(10) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Confirm_Password1);
    cy.get(
      "#contact_form > fieldset > div:nth-child(10) > div > small:nth-child(2)"
    ).should("contain", "This value is not valid");
    //email
    cy.get("#contact_form > fieldset > div:nth-child(11) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.E_Mail1);
    cy.get(
      "#contact_form > fieldset > div:nth-child(11) > div > small:nth-child(3)"
    ).should("contain", "Please enter a valid Email Address");
    //contact number
    cy.get("#contact_form > fieldset > div:nth-child(12) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Contact_No1);
    cy.get("#contact_form > fieldset > div:nth-child(12) > div > small").should(
      "contain",
      "This value is not valid"
    );
    //additional info
    cy.get("#exampleFormControlTextarea1")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Additional_Info);
    cy.wait(3000);
    //submit button
    cy.get('[type="submit"]').should("be.disabled");
  });
  it("Positive case for login page", function () {
    cy.visit("https://mytestingthoughts.com/Sample/home.html");
    //first name
    cy.get("#contact_form > fieldset > div:nth-child(3) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.First_Name);
    //last name
    cy.get("#contact_form > fieldset > div:nth-child(4) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Last_Name);
    //gender
    cy.get("#inlineRadioFemale")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Gender);
    //hobbies
    cy.get("#exampleFormControlSelect2")
      .should("be.visible")
      .and("be.enabled")
      .select("Swimming");
    //deparment/office
    cy.get("#contact_form > fieldset > div:nth-child(7) > div > div > select")
      .should("be.visible")
      .and("be.enabled")
      .select("Department of Agriculture");
    //username
    cy.get("#contact_form > fieldset > div:nth-child(8) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Username);
    //password
    cy.get("#contact_form > fieldset > div:nth-child(9) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Password);
    //confirm password
    cy.get("#contact_form > fieldset > div:nth-child(10) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Confirm_Password);
    //email
    cy.get("#contact_form > fieldset > div:nth-child(11) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.E_Mail);
    //contact number
    cy.get("#contact_form > fieldset > div:nth-child(12) > div > div > input")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Contact_No);
    //additional info
    cy.get("#exampleFormControlTextarea1")
      .should("be.visible")
      .and("be.enabled")
      .type(this.data.Additional_Info);
    cy.wait(3000);
    //submit button
    cy.get('[type="submit"]').click({ force: true });
  });
});
