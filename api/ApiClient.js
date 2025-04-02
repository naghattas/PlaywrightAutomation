// api/ApiClient.js
const axios = require('axios');

class ApiClient {
  constructor(baseURL = 'https://api.gofan.co') {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  async getEvents(schoolId) {
    try {
      const response = await this.client.get(`/schools/${schoolId}/events`);
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  }

  async getSchoolByName(schoolName) {
    try {
      const response = await this.client.get('/schools/search', {
        params: { query: schoolName }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching for school:', error);
      throw error;
    }
  }

  async getTicketAvailability(eventId) {
    try {
      const response = await this.client.get(`/events/${eventId}/tickets`);
      return response.data;
    } catch (error) {
      console.error('Error fetching ticket availability:', error);
      throw error;
    }
  }
}

module.exports = { ApiClient };
