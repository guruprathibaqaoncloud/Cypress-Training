describe("Swagger api", function () {
  it("Upload file for a pet", function () {
    // Replace '12345' with the actual petId
    const petId = 12345;

    // Form data for the file upload
    const formData = new FormData();
    formData.append(
      "file",
      new Blob(["Sample file content"], { type: "text/plain" }),
      "testFile.txt"
    );

    // Send POST request to the correct endpoint
    cy.request({
      method: "POST",
      url: `https://petstore.swagger.io/v2/pet/${petId}/uploadImage`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
      failOnStatusCode: false, // Optional, in case the server responds with a non-2xx status code
    }).then((response) => {
      // Validate the response
      expect(response.status).to.eq(200);
      cy.log("Response:", response.body);
    });
  });

  it("Should add a new pet successfully", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/pet", {
      id: 12345,
      category: { id: 1, name: "Dog" },
      name: "doggie",
      tags: [{ id: 1, name: "friendly" }],
      status: "available",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("doggie");
    });
  });

  it("Should update an existing pet successfully", () => {
    cy.request("PUT", "https://petstore.swagger.io/v2/pet", {
      id: 12345, // Replace with the existing pet ID
      category: { id: 1, name: "Dog" },
      name: "doggie-updated", // Updated name of the pet
      tags: [{ id: 1, name: "friendly-updated" }], // Updated tags
      status: "sold", // Updated status
    }).then((response) => {
      // Assertions
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("doggie-updated");
      expect(response.body.status).to.eq("sold");
    });
  });

  it("Should fetch the pet details successfully", () => {
    const petId = 12345; // Replace with the actual pet ID

    cy.request("GET", `https://petstore.swagger.io/v2/pet/${petId}`).then(
      (response) => {
        // Assertions
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petId);
      }
    );
  });

  it("delete through api key and id", function () {
    cy.request("DELETE", "https://petstore.swagger.io/v2/pet/15").then(
      (Response) => {
        expect(Response.status).equal(200);
        expect(Response.body.code).equal(200);
      }
    );
  });
});
