import { createVenueRecommendationTemplate } from '../templates/template-creator';
import TheVenueSource from '../../data/venue-source';

const VenueList = {
  async render() {
    return `
    <h2>Our <span>Recommendations</span></h2>
    <div class="break-line"></div>
    <div class="content">
      <div id="recommendation-list" class="recommendation-list"></div>
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
    const locationsContainer = document.querySelector('#recommendation-list');
    locations.slice(0, 6).forEach((location) => {
      locationsContainer.innerHTML += createVenueRecommendationTemplate(location);
    });
  },
};
export default VenueList;
