describe("Drag and drop", () => {
  it("Using drag and drop", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop");
    const dataTransfer = new DataTransfer();
    cy.contains("Fried Chicken").trigger("dragstart", { dataTransfer });
    cy.get("#plate-items").trigger("drop", { dataTransfer });
    cy.contains("Ice Cream").trigger("dragstart", { dataTransfer });
    cy.get("#plate-items").trigger("drop", { dataTransfer });
    cy.get("#menu-hamburger").trigger("dragstart", { dataTransfer });
    cy.get("#plate-items").trigger("drop", { dataTransfer });
  });

  it("Mouse up and down", () => {
    cy.visit("https://www.flipkart.com/");
    //to view and check helpcenter option in page below
    cy.get(
      "#container > div > footer > div > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(4) > a > span"
    ).trigger("mousedown");
    cy.wait(2000);
    cy.get(
      "#container > div > footer > div > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(4) > a > span"
    ).should("be.visible");
    //to view and check top offer option in page top
    cy.get(
      "#container > div > div._331-kn._2tvxW > div > div > div:nth-child(1) > a > div.xtXmba"
    ).trigger("mouseup");
    cy.wait(2000);
    cy.get(
      "#container > div > div._331-kn._2tvxW > div > div > div:nth-child(1) > a > div.xtXmba"
    ).should("be.visible");
    //to view and validate no cost emi
    cy.get(
      "#container > div > footer > div > div:nth-child(2) > div > div > div > h2:nth-child(16)"
    ).trigger("mousedown");
    cy.wait(2000);
    cy.get(
      "#container > div > footer > div > div:nth-child(2) > div > div > div > h2:nth-child(16)"
    ).should("be.visible");
    //to view and check travel option
    cy.get(
      "#container > div > div._331-kn._2tvxW > div > div > div:nth-child(8) > a > div.xtXmba"
    ).trigger("mouseup");
    cy.wait(2000);
    cy.get(
      "#container > div > div._331-kn._2tvxW > div > div > div:nth-child(8) > a > div.xtXmba"
    ).should("be.visible");
    cy.get(
      "#container > div > footer > div > div:nth-child(2) > div > div > div > h2:nth-child(16)"
    ).trigger("mousedown", "topRight");
  });
  it("Mouse over option", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get(
      "#container > div > div._331-kn._2tvxW > div > div > div:nth-child(5) > a > div._1psGvi.SLyWEo > div > div"
    )
      .trigger("mouseover")
      .should("be.visible");
    cy.get(
      "#container > div > div._331-kn._2tvxW > div > div > div:nth-child(9) > a > div._1psGvi.SLyWEo > div > div"
    )
      .trigger("mouseover")
      .should("be.visible");
    cy.get(
      "#container > div > div._331-kn._2tvxW > div > div > div:nth-child(6) > a > div._1psGvi.SLyWEo > div > div"
    ).should("be.visible");
  });

  it("Right click", () => {
    cy.visit("https://demo.guru99.com/test/simple_context_menu.html");
    cy.contains("right click me").rightclick();
    cy.wait(2000);
    cy.get(".context-menu-icon-cut > span").should("be.visible");
    cy.get(".context-menu-icon-quit > span").should("be.visible");
  });
  it("Double click", () => {
    cy.visit("https://demo.guru99.com/test/simple_context_menu.html");
    cy.contains("Double-Click Me To See Alert").dblclick();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("You double clicked me.. Thank You..");
    });
  });
});
