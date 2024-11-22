describe("Alerts", () => {
  it("JS Alert", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");

    cy.get("#content > div > ul > li:nth-child(1) > button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
  it("JS Confirm-OK", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    //ok button
    cy.get("#content > div > ul > li:nth-child(2) > button").click();

    cy.on("window:confirm", (text) => {
      expect(text).to.contain("I am a JS Confirm");
    });
    //ok button
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("JS Confirm-Cancel", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    //cancel button

    cy.get("#content > div > ul > li:nth-child(2) > button").click();

    cy.on("window:confirm", () => false);

    //cancel button
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("JS Prompt-OK", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    //OK button
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Hello");
    });

    cy.get("#content > div > ul > li:nth-child(3) > button").click();
    cy.get("#result").should("have.text", "You entered: Hello");
  });
  it("JS Prompt-cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //fire confirm browser event
    cy.on("window:confirm", (s) => {
      return false;
    });
    // click on Click for JS Confirm button
    cy.get(":nth-child(2) > button").click();
    // verify application message on Cancel button click
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });
});
