import FavoriteVenueIdb from '../../data/favoritevenue-idb';
import { createVenueItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorited Venue</h2>
        <div id="venues" class="venues">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const venues = await FavoriteVenueIdb.getAllVenues();
    const venuesContainer = document.querySelector('#venues');
    venues.forEach((venue) => {
      venuesContainer.innerHTML += createVenueItemTemplate(venue);
    });
  },
};

export default Favorite;
