// tests/api/eventsApi.spec.js
const { test, expect } = require('@playwright/test');
const { ApiClient } = require('../../api/ApiClient');

test.describe('PlayON Sports - API Tests', () => {
  let apiClient;

  test.beforeEach(() => {
    apiClient = new ApiClient();
  });

  test('Can fetch events for a school', async () => {
    // This is a mock test - adjust with actual API endpoints
    const schoolId = '12345';
    const events = await apiClient.getEvents(schoolId);
    
    expect(events).toBeDefined();
    expect(Array.isArray(events)).toBeTruthy();
  });

  test('Can search for a school by name', async () => {
    const schoolName = 'Griffin High School';
    const results = await apiClient.getSchoolByName(schoolName);
    
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name).toContain('Griffin');
  });

  test('Can check ticket availability for an event', async () => {
    const eventId = '67890';
    const tickets = await apiClient.getTicketAvailability(eventId);
    
    expect(tickets).toBeDefined();
    expect(tickets.available).toBeDefined();
  });
});
