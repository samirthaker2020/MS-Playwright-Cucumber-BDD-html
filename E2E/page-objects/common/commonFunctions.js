const { expect } = require('chai');
const { CommonObjects } = require('./commonObjects');

const commonObject = new CommonObjects();
class CommomFunctions {
  async navigateToLoginScreen() {
    await page.goto('https://www.saucedemo.com/');
  }

  async submitLoginForm() {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  }

  async submitLoginWithParameters(username, password) {
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button');
  }

  async assertUserIsLoggedIn() {
    await page.waitForSelector('.inventory_list');
  }

  async pause() {
    await page.waitForTimeout(3000);
  }

  async verifyText(text, element) {
    const response = page.locator(element);
    expect(await response.textContent()).to.be.eql(text);
    console.log(await response.textContent());
  }
}

module.exports = { CommomFunctions };
