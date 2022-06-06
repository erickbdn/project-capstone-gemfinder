import { createVenueItemTemplate } from '../templates/template-creator';
import DATA from '../../data/venue.json';

const VenueList = {
  async render() {
    return `
      <h2>Venue All Star</h2>

      <div class="venue">
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
