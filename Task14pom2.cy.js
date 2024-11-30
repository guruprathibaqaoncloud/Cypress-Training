Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
import MyTestingThoughts from "./pageobject./pomtestingthoughts.cy";
describe("Fied Verification", function () {
  it("Negativecase without value", function () {
    const reg = new MyTestingThoughts();
    reg.visit();
    reg.Submit();
    reg.Note();
  });
  it("Negative case with invalid input", function () {
    const reg = new MyTestingThoughts();
    reg.visit();
    reg.First_Name("s");
    reg.Last_Name("n");
    reg.Gender("female");
    reg.Hobbies("Running");
    reg.Department_Office();
    reg.Username("m");
    reg.Password("23");
    reg.Confirm_Password("23");
    reg.E_Mail("com");
    reg.Contact_No("773");
    reg.Additional_Info("Good field");
    reg.Disabledsubmit();
    reg.Alert();
  });

  it("positive case", function () {
    const reg = new MyTestingThoughts();
    reg.visit();
    reg.First_Name("guru");
    reg.Last_Name("prathiba");
    reg.Gender("female");
    reg.Hobbies("Running");
    reg.Department_Office();
    reg.Username("gurumuruganantham");
    reg.Password("guru@23");
    reg.Confirm_Password("guru@23");
    reg.E_Mail("guru@gmail.com");
    reg.Contact_No("919976824373");
    reg.Additional_Info("Good field");
    reg.Submit();
    reg.Note();
  });
});
