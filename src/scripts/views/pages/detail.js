import UrlParser from '../../routes/url-parser';
import { createVenueDetailTemplate } from '../templates/template-creator';
import TheVenueSource from '../../data/venue-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <h2 class="detail__header"> Details </h2>
    <div class="break-line"></div>
      <div id="venue" class="venue"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const details = await TheVenueSource.detailLocation(url.id);
    const locationContainer = document.querySelector('#venue');
    locationContainer.innerHTML = createVenueDetailTemplate(details);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      details: {
        id: details.id,
        name: details.name,
        rating: details.rating,
        kabupatenkota: details.kabupatenkota,
        provinsi: details.provinsi,
        address: details.address,
        description: details.description,
        image: details.image,
      },
    });
  },
};

export default Detail;
