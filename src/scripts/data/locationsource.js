/* eslint-disable eol-last */
import API_ENDPOINT from '../globals/api-endpoint';

class LocationSource {
  static async Locations() {
    const response = await fetch(API_ENDPOINT.LOCATION);
    return response.json();
  }

  static async detailLocation(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async riskScoreCovid() {
    const response = await fetch(API_ENDPOINT.COVID, {
      method: 'GET',
      mode: 'no-cors',
      contentType: 'application/json',
      headers: {
        'Access-Control-Allow-Headers': '*',
      },
    });
    return response.json();
  }
}

export default LocationSource;