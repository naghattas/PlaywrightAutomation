// pages/TicketSelectionPage.js
const { BasePage } = require('./BasePage');

class TicketSelectionPage extends BasePage {
  constructor(page) {
    super(page);
    this.ticketQuantityDropdown = '.ticket-quantity-dropdown';
    this.ticketQuantityOptions = '.ticket-quantity-option';
    this.addToCartButton = 'button:has-text("Add to cart")';
    this.proceedToCheckoutButton = 'button:has-text("Proceed to checkout")';
  }

  async selectTicketQuantity(quantity = 1) {
    await this.clickElement(this.ticketQuantityDropdown);
    await this.clickElement(`${this.ticketQuantityOptions}:has-text("${quantity}")`);
  }

  async addToCart() {
    await this.clickElement(this.addToCartButton);
  }

  async proceedToCheckout() {
    await this.clickElement(this.proceedToCheckoutButton);
  }
}

module.exports = { TicketSelectionPage };
