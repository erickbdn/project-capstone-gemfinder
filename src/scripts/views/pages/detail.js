import UrlParser from '../../routes/url-parser';
import { createVenueDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import DATA from '../../data/venue.json';

const Detail = {
  async render() {
    return `
      <div id="venue" class="venue"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const venueUrlId = url.id;

    const venueContainer = document.querySelector('#venue');
    DATA.restaurants.forEach((venue) => {
      if (venueUrlId === venue.id) {
        venueContainer.innerHTML = createVenueDetailTemplate(venue);
      }
    });

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
