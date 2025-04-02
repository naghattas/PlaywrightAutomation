// pages/BasePage.js
class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }
  
    async getElement(selector) {
      return this.page.locator(selector);
    }
  
    async clickElement(selector) {
      await this.page.locator(selector).click();
    }
  
    async enterText(selector, text) {
      await this.page.locator(selector).fill(text);
    }
  
    async waitForElement(selector, timeout = 10000) {
      await this.page.locator(selector).waitFor({ state: 'visible', timeout });
    }
  
    async getText(selector) {
      return await this.page.locator(selector).innerText();
    }
  
    async isElementVisible(selector) {
      return await this.page.locator(selector).isVisible();
    }
  }
  
  module.exports = { BasePage };
  