// tests/ui/ticketPurchaseFlow.spec.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { EventsPage } = require('../../pages/EventsPage');
const { TicketSelectionPage } = require('../../pages/TicketSelectionPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test.describe('PlayON Sports - Ticket Purchase Flow', () => {
  test('User can search for a school and purchase a ticket', async ({ page }) => {
    // Initialize page objects
    const homePage = new HomePage(page);
    const eventsPage = new EventsPage(page);
    const ticketSelectionPage = new TicketSelectionPage(page);
    const checkoutPage = new CheckoutPage(page);
    
    // Navigate to home page
    await homePage.navigateToHomePage();
    
    // Search for school
    await homePage.searchForSchool('Griffin High School');
    await homePage.selectSchoolFromResults('Griffin High School');
    
    // Select event
    await eventsPage.selectEvent(0);
    
    // Select ticket and add to cart
    await ticketSelectionPage.selectTicketQuantity(2);
    await ticketSelectionPage.addToCart();
    await ticketSelectionPage.proceedToCheckout();
    
    // Enter email and verify
    const testEmail = 'test@example.com';
    await checkoutPage.enterEmail(testEmail);
    await checkoutPage.clickContinue();
    
    // Verify email is displayed correctly
    const isEmailDisplayed = await checkoutPage.verifyEmailDisplayed(testEmail);
    expect(isEmailDisplayed).toBeTruthy();
  });
});
