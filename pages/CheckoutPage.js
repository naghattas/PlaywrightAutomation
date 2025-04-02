// pages/CheckoutPage.js
const { BasePage } = require('./BasePage');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = 'input[type="email"]';
    this.continueButton = 'button:has-text("Continue")';
    this.emailConfirmation = text => `text=We're sending your order to ${text}`;
  }

  async enterEmail(email) {
    await this.enterText(this.emailInput, email);
  }

  async clickContinue() {
    await this.clickElement(this.continueButton);
  }

  async verifyEmailDisplayed(email) {
    await this.waitForElement(this.emailConfirmation(email));
    return await this.isElementVisible(this.emailConfirmation(email));
  }
}

module.exports = { CheckoutPage };
