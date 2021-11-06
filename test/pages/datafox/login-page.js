import DatafoxNavigationComp from "../components/datafox-navigation-comp";

class LoginPage {
  open() {
    return browser.url("/");
  }

  get emailAddress() {
    return $('//input[@placeholder="Email address"]');
  }

  get password() {
    return $('//input[@placeholder="Password"]');
  }

  get btnSubmit() {
    return $('//button[@type="submit"]');
  }

  async login(username, password) {
    await this.emailAddress.setValue(username);
    await this.password.setValue(password);
    await this.btnSubmit.click();
  }

  get DatafoxNavigationComp() {
    return DatafoxNavigationComp;
  }

}

export default new LoginPage();