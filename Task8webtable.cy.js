describe("Handle Tables", () => {
  beforeEach("Login", () => {
    // hook
    cy.visit("https://demo.opencart.com/admin/index.php");

    cy.get("button[type='submit']").click();
    // Customers  --> Customers
    cy.get("#menu-customer>a").click(); // left menu
    cy.get("#menu-customer>ul>li:first-child").click();
  });

  // it.skip, skips execution of that test case.
  it("Check Number of Rows & Columns", () => {
    // here every page has same number of rows and columns
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      "have.length",
      "10"
    );
    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should("have.length", "6");
  });

  it.only("Pagination", () => {
    let totalPages;
    // find total number of pages
    cy.get(".col-sm-6.text-end").then((e) => {
      let mytext = e.text(); // showing 1 to 10 of 5581 (559 Pages)
      totalPages = mytext.substring(
        mytext.indexOf("(") + 1,
        mytext.indexOf("Pages") - 1
      );
      cy.log("Total number of pages in a table --> " + totalPages);
    });

    let totalPagesTest = 5; // test for only 5 pages instead of 559 pages
    for (let p = 1; p <= totalPagesTest; p++) {
      if (totalPagesTest > 1) {
        cy.log("Active page is-->" + p);
        cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
        cy.wait(1000);

        // read data from particular page
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((e) => {
                cy.log(e.text()); // log only email
              });
            });
          }
        );
      }
    }
  });
});
