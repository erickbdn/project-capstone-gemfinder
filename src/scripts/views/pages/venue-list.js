import { createVenueItemTemplate } from '../templates/template-creator';
import DATA from '../../data/venue.json';

const VenueList = {
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

      <h2>Venue All Star</h2>

      <div class="content">
        <div id="venue-list" class="venue-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const venuesContainer = document.querySelector('#venue-list');

    if (DATA.restaurants.length !== 0) {
      DATA.restaurants.forEach((venue) => {
        venuesContainer.innerHTML += createVenueItemTemplate(venue);
      });
    }
  },
};

export default VenueList;
