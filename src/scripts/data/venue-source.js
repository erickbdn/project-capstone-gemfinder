import API_ENDPOINT from '../globals/api-endpoint';

class TheVenueSource {
  static async Home() {
    const response = await fetch(API_ENDPOINT.LOCATION);
    return response.json();
  }

  static async detailLocation(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheVenueSource;
