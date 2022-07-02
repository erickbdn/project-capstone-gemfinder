import { createVenueItemTemplate } from '../templates/template-creator';
import TheVenueSource from '../../data/venue-source';

const VenueFullList = {
  async render() {
    return `
        <h2><span>Venue</span> All Star</h2>
        <div class="break-line"></div>
        <div class="content">
          <div id="venue-list" class="venue-list"></div>
        </div>
        <div class="testimonial">
          <div class="small-container">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-quote-left"></i>
                <p class="text">Amazing holiday with GemFinder.</p>
                <p class="star">&bigstar; &bigstar; &bigstar; &bigstar; &star;</p>
                <img src="./images/user-1.jpg">
                <h3>Emily Victoria</h3>
              </div>
              <div class="col-3">
                <i class="fa fa-quote-left"></i>
                <p class="text">Amazing holiday with GemFinder.</p>
                <p class="star">&bigstar; &bigstar; &bigstar; &bigstar; &bigstar;</p>
                <img src="./images/user-2.jpg">
                <h3>Asher Zachary</h3>
              </div>
              <div class="col-3">
                <i class="fa fa-quote-left"></i>
                <p class="text">Amazing holiday with GemFinder.</p>
                <p class="star">&bigstar; &bigstar; &bigstar; &bigstar; &star;</p>
                <img src="./images/user-3.jpg">
                <h3>Grace Madison</h3>
              </div>
            </div>
          </div>
        </div>
      `;
  },

  async afterRender() {
    const locations = await TheVenueSource.Home();
    const locationsContainer = document.querySelector('#venue-list');
    locations.forEach((location) => {
      locationsContainer.innerHTML += createVenueItemTemplate(location);
    });
  },
};

export default VenueFullList;
