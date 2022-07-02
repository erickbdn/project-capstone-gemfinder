/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-promise-reject-errors */
import UrlParser from '../../routes/url-parser';
import { createVenueDetailTemplate } from '../templates/template-creator';
import LocationSource from '../../data/locationsource';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="venue" class="venue"></div>
      <div id="weather" class="weather"</div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const details = await LocationSource.detailLocation(url.id);
    const locationContainer = document.querySelector('#venue');
    // locationContainer.innerHTML = createVenueDetailTemplate(details);

    let cuaca = 0;
    fetch(`https://ibnux.github.io/BMKG-importer/cuaca/${details.idWeather}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.message === 'Success') {
          cuaca = responseJson.cuaca;
        } else {
          return Promise.reject('Data is Not Found!');
        }
        locationContainer.innerHTML = createVenueDetailTemplate(details, cuaca);
      });

    // fetch('https://data.covid19.go.id/public/api/skor.json', { mode: 'no-cors' })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.message === 'Success') {
    //       riskScore = responseJson.hasil;
    //     } else {
    //       return Promise.reject('Data is not found!');
    //     }
    //     locationContainer.innerHTML = createVenueDetailTemplate(details, riskScore);
    //   });

    // detail.forEach((details) => {
    //   if (detail === details.id) {
    //     let jumlahPuskesmas = 0;
    //     fetch(`https://kipi.covid19.go.id/api/get-faskes-vaksinasi?city=${details.kabupatenkota}`)
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         if (responseJson.message === 'Success') {
    //           jumlahPuskesmas = responseJson.count_total;
    //         } else {
    //           // eslint-disable-next-line prefer-promise-reject-errors
    //           return Promise.reject('Data is Not Found!');
    //         }
    //         locationContainer.innerHTML = createVenueDetailTemplate(details, jumlahPuskesmas);
    //       });

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
  //   });
  // },
};

export default Detail;
