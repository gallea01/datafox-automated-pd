import LoginPage from "../../pages/datafox/login-page";
import * as faker from "faker";
import allureReporter from "@wdio/allure-reporter";

describe("Login", () => {
  before(async () => {
    //Do this once, primarily for initialization
    console.log("Run BEFORE");
  });

  beforeEach(async () => {
    //Do this for every test run
    console.log("Run BEFORE EACH TEST");
  });

  after(async () => {
    //Used for test clean up: logging out, clean data, etc
    console.log("Run AFTER");
  });

  afterEach(async () => {
    //Usually for logging
    console.log("Run AFTER EACH TEST");
  });

  it("should bring you to home page after a successful login", async () => {
    allureReporter.addFeature("Login Verification");
    allureReporter.addSeverity("critical");

    await LoginPage.open();
    await LoginPage.emailAddress.setValue(
      "df.prod.test.01+account.owner.01@gmail.com"
    );
    await LoginPage.password.setValue("TestOracle123");
    await LoginPage.btnSubmit.click();

    await LoginPage.login(
      "df.prod.test.01+account.owner.01@gmail.com",
      "TestOracle123"
    );

    await expect(browser).toHaveTitle("My Lists");
  });

  it("Home page should be able to open all tabs and assert Documentation", async () => {
    allureReporter.addFeature("Tab Verification");

    await browser.url("https://app.datafox.com/search/lists/mine");
    await LoginPage.DatafoxNavigationComp.companiesTab.click();
    await LoginPage.DatafoxNavigationComp.conferencesTab.click();
    await LoginPage.DatafoxNavigationComp.accountScoringTab.click();
    await LoginPage.DatafoxNavigationComp.insightsTab.click();
    await LoginPage.DatafoxNavigationComp.recentItemsTab.click();
    await LoginPage.DatafoxNavigationComp.uploadListTab.click();
    await LoginPage.DatafoxNavigationComp.documentationTab.click();
    await browser.switchWindow(
      "https://docs.oracle.com/en/cloud/saas/datafox/index.html"
    );
    await expect(browser).toHaveTitle("Oracle DataFox - Get Started");
  });

  it("Test to demonstrate failed test with screenshot", async () => {
    allureReporter.addFeature("Screenshot Test on Fail");

    var myStr = 9;
    myStr = "Hello World";
    console.log(myStr);

    await browser.url("https://app.datafox.com/search/lists/mine");
    await LoginPage.DatafoxNavigationComp.companiesTab.click();
    await expect(browser).not.toHaveTitle("Oracle DataFox - Get Started");
  });

  xit("Sample faker", async () => {
    await $("#firstName").setValue(faker.name.firstName);
    await $("#address").setValue(faker.address.streetName());
    await $("#email").setValue(faker.internet.email());
    await $("#phone").setValue(faker.phone.phoneNumber());
    await $("#message").setValue(faker.lorem.paragraph());
  });
});
