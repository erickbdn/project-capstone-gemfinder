import UrlParser from '../../routes/url-parser';
import { createVenueDetailTemplate } from '../templates/template-creator';
import DATA from '../../data/venue.json';
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
    const venueUrlId = url.id;

    const venueContainer = document.querySelector('#venue');
    DATA.venues.forEach((venue) => {
      if (venueUrlId === venue.id) {
        let jumlahPuskesmas = 0;
        fetch(`https://kipi.covid19.go.id/api/get-faskes-vaksinasi?city=${venue.kabupatenkota}`)
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.message === 'Success') {
              jumlahPuskesmas = responseJson.count_total;
            } else {
              // eslint-disable-next-line prefer-promise-reject-errors
              return Promise.reject('Data is Not Found!');
            }
            venueContainer.innerHTML = createVenueDetailTemplate(venue, jumlahPuskesmas);
          });

        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          venue: {
            id: venue.id,
            name: venue.name,
            kabupatenkota: venue.kabupatenkota,
            provinsi: venue.provinsi,
            address: venue.address,
            description: venue.description,
            rating: venue.rating,
            pictureId: venue.pictureId,
          },
        });
      }
    });
  },
};

export default Detail;
