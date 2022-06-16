/* eslint-disable no-console */
import LocationSource from '../../data/location-source';
import { createLocationItemTemplate } from '../templates/template-creator';

const Location = {
  async render() {
    return `
        <div class="content">
          <h2 class="content-heading">Available Location</h2>
          <div id=locations class="locations">

          </div>
        </div>  
      `;
  },

  async afterRender() {
    const locations = await LocationSource.Locations();
    const locationsContainer = document.querySelector('#locations');
    locations.forEach((location) => {
      locationsContainer.innerHTML += createLocationItemTemplate(location);
    });
  },
};

export default Location;
