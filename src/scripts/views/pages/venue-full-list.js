import { createVenueItemTemplate } from '../templates/template-creator';
import LocationSource from '../../data/locationsource';

const VenueFullList = {
  async render() {
    return `
      <div class="hero">
        <div class="container">
          <h1 class="hero__title">Jelajahi Destinasi Indah Tersembunyi</h1>
          <p class="hero__tagline">Bangun Suasana Hatimu dengan Berwisata yang Menyenangkan!</p>
          <a href="#content" class="btn">Find Now!</a>
        </div>
      </div>
      <h1 class="empty"></h1>
      <div class="break-line">
        <h2>Venue All Star</h2>
      </div>
      <div class="content">
        <div id="venue-list" class="venue-list"></div>
      </div>

      <div class="testimonial">
        <div class="small-container">
          <div class="row">
            <div class="col-3">
              <i class="fa fa-quote-left"></i>
              <p class="text">Amazing holiday with GemFinder.</p>
              <p>&bigstar; &bigstar; &bigstar; &bigstar; &star;</p>
              <img src="./images/user-1.jpg">
              <h3>Emily Victoria</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left"></i>
              <p class="text">Amazing holiday with GemFinder.</p>
              <p>&bigstar; &bigstar; &bigstar; &bigstar; &bigstar;</p>
              <img src="./images/user-2.jpg">
              <h3>Asher Zachary</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left"></i>
              <p class="text">Amazing holiday with GemFinder.</p>
              <p>&bigstar; &bigstar; &bigstar; &bigstar; &star;</p>
              <img src="./images/user-3.jpg">
              <h3>Grace Madison</h3>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const locations = await LocationSource.Locations();
    const locationsContainer = document.querySelector('#venue-list');
    locations.forEach((location) => {
      locationsContainer.innerHTML += createVenueItemTemplate(location);
    });
  },
};

export default VenueFullList;
