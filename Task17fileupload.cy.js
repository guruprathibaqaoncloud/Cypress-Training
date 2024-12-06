describe("File Upload Test", () => {
  it("File Upload Test", () => {
    cy.visit("https://blueimp.github.io/jQuery-File-Upload/");
    const imagefile = "art.jpg";
    cy.get('[type="file"]').attachFile(imagefile);
    cy.wait(5000);
    cy.get(
      "#fileupload > table > tbody > tr > td:nth-child(4) > button.btn.btn-primary.start"
    ).click();
    cy.wait(3000);
  });
});
