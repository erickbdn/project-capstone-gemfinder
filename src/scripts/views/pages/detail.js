import UrlParser from '../../routes/url-parser';
import { createVenueDetailTemplate } from '../templates/template-creator';
import LocationSource from '../../data/locationsource';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="venue" class="venue"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const details = await LocationSource.detailLocation(url.id);
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
