describe("Swaglab Website", function () {
  it("login with valid id 1", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
  });

  it("Add to cart for id1(high to low)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Price (high to low)");
    cy.contains("Price (high to low)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-onesie").click();
  });
  it.only("Add to cart for id1(low to high)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Price (low to high)");
    cy.contains("Price (low to high)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
  });
  it("Add to cart for id1(Z-A)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Name (Z to A)");
    cy.contains("Name (Z to A)").should("be.visible");
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();
  });
  it("Add to cart for id1(A-Z)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Name (A to Z)");
    cy.contains("Name (A to Z)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  });
  it("Add to cart for id3problem user(A-Z)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Name (A to Z)");
    cy.contains("Name (A to Z)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    //cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    //cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    //cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
  });
  it("Add to cart for id4(high to low)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Price (high to low)");
    cy.contains("Price (high to low)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-onesie").click();
  });
  it("Add to cart for id4(low to high)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Price (low to high)");
    cy.contains("Price (low to high)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
  });
  it("Add to cart for id4(Z-A)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Name (Z to A)");
    cy.contains("Name (Z to A)").should("be.visible");
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();
  });
  it("Add to cart for id4(A-Z)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Name (A to Z)");
    cy.contains("Name (A to Z)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  });
  it("Amount calculation for id1(A-Z)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Name (A to Z)");
    cy.contains("Name (A to Z)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get("#shopping_cart_container > a").click();
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$29.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$9.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(5) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$15.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(6) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$49.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(7) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$7.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(8) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$15.99");
    cy.get("#checkout").click();
    cy.get("#first-name").type("Guru");
    cy.get("#last-name").type("Prathiba");
    cy.get("#postal-code").type(654321);
    cy.get("#continue").click();
    cy.url().should("include", "checkout-step-two");
    cy.get(".summary_total_label")
      .should("be.visible")
      .and("contain", "$140.34");
  });
  it("Amount calculation for id3problem user(A-Z)", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Name (A to Z)");
    cy.contains("Name (A to Z)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    //cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    //cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    //cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get("#shopping_cart_container > a").click();
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$29.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$9.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(5) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$7.99");
    cy.get("#checkout").click();
    cy.get("#first-name").type("sowmiya");
    cy.get("#last-name").type("shanmugam");
    cy.get("#postal-code").type(654321);
    cy.get("#continue").click();
    cy.url().should("include", "checkout-step-two");
    cy.get(".summary_total_label")
      .should("be.visible")
      .and("contain", "$51.81");
  });
  it("Amount calculation for id4", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(
      "#header_container > div.header_secondary_container > div.right_component > span > select"
    ).select("Name (A to Z)");
    cy.contains("Name (A to Z)").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get("#shopping_cart_container > a").click();
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$29.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$9.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(5) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$15.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(6) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$49.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(7) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$7.99");
    cy.get(
      "#cart_contents_container > div > div.cart_list > div:nth-child(8) > div.cart_item_label"
    )
      .should("be.visible")
      .and("contain", "$15.99");
    cy.get("#checkout").click();
    cy.get("#first-name").type("sowmiya");
    cy.get("#last-name").type("shanmugam");
    cy.get("#postal-code").type(654321);
    cy.get("#continue").click();
    cy.url().should("include", "checkout-step-two");
    cy.get(".summary_total_label")
      .should("be.visible")
      .and("contain", "$140.34");
    cy.get(
      "#checkout_summary_container > div > div.summary_info > div.summary_tax_label"
    )
      .should("be.visible")
      .and("contain", "Tax: $10.40");
    cy.get(".summary_subtotal_label")
      .should("be.visible")
      .and("contain", "Item total: $129.94");
  });
  it("Negative-login id 1 without adding product checking cart", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('[id="password"]').type("secret_sauce");
    cy.get('[id="login-button"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#continue").click();
    cy.get(
      "#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error"
    ).should("be.visible");
  });
});
