import UrlParser from '../../routes/url-parser';
import LocationSource from '../../data/location-source';
import { createLocationDetailTemplate } from '../templates/template-creator';

const locationDetail = {
  async render() {
    return `
        <div id="location" class="location"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const details = await LocationSource.detailLocation(url.id);
    const locationContainer = document.querySelector('#location');
    locationContainer.innerHTML = createLocationDetailTemplate(details);
  },
};

export default locationDetail;
