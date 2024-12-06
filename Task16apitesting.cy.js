context("usermanage api automation", () => {
  it("GET-list user", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((Response) => {
      expect(Response.status).equal(200);
      expect(Response.body.data[0].first_name).equal("Michael");
      expect(Response.body.data[3].avatar).equal(
        "https://reqres.in/img/faces/10-image.jpg"
      );
      expect(Response.body.data[2].last_name).equal("Funke");
      expect(Response.body.data[5].first_name).equal("Rachel");
    });
  });
  it("GET-single user", () => {
    cy.request("GET", "https://reqres.in/api/users/2").then((Response) => {
      expect(Response.status).equal(200);
      expect(Response.body.data.email).equal("janet.weaver@reqres.in");
      expect(Response.body.data.last_name).equal("Weaver");
      expect(Response.body.data.avatar).equal(
        "https://reqres.in/img/faces/2-image.jpg"
      );
    });
  });

  it("GET-delayed response", () => {
    cy.request("GET", "https://reqres.in/api/users?delay=3").then(
      (Response) => {
        expect(Response.status).equal(200);
        expect(Response.body.data[0].first_name).equal("George");
        expect(Response.body.data[0].last_name).equal("Bluth");
      }
    );
  });
  it("GET-list resources", () => {
    cy.request("GET", "https://reqres.in/api/unknown").then((Response) => {
      expect(Response.status).equal(200);
      expect(Response.body.data[0].name).equal("cerulean");
      expect(Response.body.data[1].name).equal("fuchsia rose");
      expect(Response.body.data[3].pantone_value).equal("14-4811");
    });
  });
  it("GET-single resources", () => {
    cy.request("GET", "https://reqres.in/api/unknown/2").then((Response) => {
      expect(Response.status).equal(200);
      expect(Response.body.data.name).equal("fuchsia rose");
    });
  });

  it("POST-create user", () => {
    var user = {
      name: "Sowmiya",
      job: "Testing",
    };
    cy.request("POST", "https://reqres.in/api/users", user).then((Response) => {
      expect(Response.status).equal(201);
      expect(Response.body.name).equal(user.name);
      expect(Response.body.job).equal(user.job);
    });
  });
  it("POST-register successful", () => {
    var user2 = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    cy.request("POST", "https://reqres.in/api/register", user2).then(
      (Response) => {
        expect(Response.status).equal(200);
        expect(Response.body.email).equal(user2.id);
        expect(Response.body.email).equal(user2.token);
      }
    );
  });

  it("POST-login successful", () => {
    var user4 = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    cy.request("POST", "https://reqres.in/api/login", user4).then(
      (Response) => {
        expect(Response.status).equal(200);
        expect(Response.body.email).equal(user4.token);
        expect(Response.body.password).equal(user4.token);
        expect(Response.body.email).equal(user4.id);
      }
    );
  });

  it("PUT-update user", () => {
    var user1 = {
      name: "sowmiya",
      job: "Tech",
    };
    cy.request("PUT", "https://reqres.in/api/users/2", user1).then(
      (Response) => {
        expect(Response.status).equal(200);
        expect(Response.body.name).equal(user1.name);
        expect(Response.body.job).equal(user1.job);
      }
    );
  });
  it("DELETE-delete user", () => {
    cy.request("DELETE", "https://reqres.in/api/users/2").then((Response) => {
      expect(Response.status).equal(204);
    });
  });
});
