// pages/EventsPage.js
const { BasePage } = require('./BasePage');

class EventsPage extends BasePage {
  constructor(page) {
    super(page);
    this.buyTicketsButtons = 'button:has-text("Buy tickets")';
    this.eventTitles = '.event-title';
  }

  async selectEvent(index = 0) {
    const buttons = await this.page.locator(this.buyTicketsButtons).all();
    if (buttons.length > index) {
      await buttons[index].click();
    } else {
      throw new Error(`No event found at index ${index}`);
    }
  }

  async getEventTitle(index = 0) {
    const titles = await this.page.locator(this.eventTitles).all();
    if (titles.length > index) {
      return await titles[index].innerText();
    }
    return null;
  }
}

module.exports = { EventsPage };
