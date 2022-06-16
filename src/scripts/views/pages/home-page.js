/* eslint-disable no-console */
import LocationSource from '../../data/location-source';
import { createLocationItemTemplate } from '../templates/template-creator';

const homePage = {
  async render() {
    return `
    <div class="getStarted">
        <h1>Get Started</h1>
    </div>
    <div class="Description">
        <p>Cari lokasi destinasi wisata hidden gem dengan GemFinder!</p>
    </div>
    <div class="findLocation">
     <a class="findLocationBtn" href=#/location>Find Your Destination Location Here</a>
    </div>
    <div class="content">
          <h2 class="content-heading">Recommended Locations</h2>
          <div id=locations class="locations">

          </div>
    </div>  
      `;
  },

  async afterRender() {
    const locations = await LocationSource.Locations();
    const locationsContainer = document.querySelector('#locations');
    locations.slice(0, 5).forEach((location) => {
      locationsContainer.innerHTML += createLocationItemTemplate(location);
    });
  },
};

export default homePage;
