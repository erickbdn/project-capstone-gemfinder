import WishlistVenueIdb from '../../data/wishlistvenue-idb';
import { createVenueItemTemplate } from '../templates/template-creator';

const Wishlist = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Wishlistd Venue</h2>
        <div id="venue-list" class="venue-list">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const venueList = await WishlistVenueIdb.getAllVenues();
    const venuesContainer = document.querySelector('#venue-list');
    venueList.forEach((venue) => {
      venuesContainer.innerHTML += createVenueItemTemplate(venue);
    });
  },
};

export default Wishlist;
