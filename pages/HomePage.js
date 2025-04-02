// pages/HomePage.js
const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = 'input[placeholder="Search for school, mascot, or city"]';
    this.searchResults = '.search-results-container';
  }

  async navigateToHomePage() {
    await this.navigate('/');
  }

  async searchForSchool(schoolName) {
    await this.enterText(this.searchInput, schoolName);
    await this.page.waitForTimeout(1000); // Allow search results to load
  }

  async selectSchoolFromResults(schoolName) {
    await this.page.locator(`text=${schoolName}`).first().click();
  }
}

module.exports = { HomePage };
