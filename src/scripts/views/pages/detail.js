import UrlParser from '../../routes/url-parser';
import { createVenueDetailTemplate } from '../templates/template-creator';
import LocationSource from '../../data/locationsource';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="venue" class="venue"></div>
      <div id="risk" class="risk"</div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await LocationSource.detailLocation(url.id);
    const locationContainer = document.querySelector('#venue');
    // locationContainer.innerHTML = createVenueDetailTemplate(details);

    detail.forEach((details) => {
      if (detail === details.id) {
        let jumlahPuskesmas = 0;
        fetch(`https://kipi.covid19.go.id/api/get-faskes-vaksinasi?city=${details.kabupatenkota}`)
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.message === 'Success') {
              jumlahPuskesmas = responseJson.count_total;
            } else {
              // eslint-disable-next-line prefer-promise-reject-errors
              return Promise.reject('Data is Not Found!');
            }
            locationContainer.innerHTML = createVenueDetailTemplate(details, jumlahPuskesmas);
          });

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
      }
    });
  },
};

export default Detail;
