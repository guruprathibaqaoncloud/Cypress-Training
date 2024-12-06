describe("Download file", function () {
  it("To download image", function () {
    cy.downloadFile(
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
      "cypress/downloads",
      "wikipedia.jpg"
    );
  });
});
