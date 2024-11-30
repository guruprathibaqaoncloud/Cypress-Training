Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import Rediffmail from "./pageobject./pomforrediff.cy";
describe("suite", function () {
  it("Positive case with valid input", function () {
    const login = new Rediffmail();
    login.visit();
    login.Full_Name("guru prathiba");
    login.ID("gurusmailbox");
    login.Password("guru@123");
    login.Retype_password("guru@123");
    login.Email_Address("guru@gmail.com");
    login.Mobile_No("6655678754");
    login.Date_of_Birth_Day("23");
    login.Date_of_Birth_Month("JUL");
    login.Date_of_Birth_Year("2000");
    login.Gender();
    login.Country("India");
    login.City("Goa");
    login.Captcha();
    login.Submit();
  });
  it("Negative case without name", function () {
    const login = new Rediffmail();
    login.visit();
    login.Alert();
    login.Password("guru@123");
    login.Retype_password("guru@123");
    login.Email_Address("guru@gmail.com");
    login.Mobile_No("6655678754");
    login.Date_of_Birth_Day("23");
    login.Date_of_Birth_Month("JUL");
    login.Date_of_Birth_Year("2000");
    login.Gender();
    login.Country("India");
    login.City("Goa");
    login.Captcha();
    login.Submit();
  });
});
