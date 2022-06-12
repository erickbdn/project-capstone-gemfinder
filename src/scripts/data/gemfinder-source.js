import CONFIG from '../globals/config';
import API_ENDPOINT from '../globals/api-endpoint';

class GemfinderSource {
  static async getDestinasiList() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async getDestinasiDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postDestinasiReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default GemfinderSource;