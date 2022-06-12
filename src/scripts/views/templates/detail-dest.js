import CONFIG from '../../globals/config';

const destiDetail = (venue) => `
  <div class="detail">
    <div class="img-container">
        <img class="detail-img" alt="${venue.name}" src="${
  CONFIG.BASE_IMAGE_URL + venue.pictureId
}"/>
    </div>

    <ul class="detail-info">
      <li>
        <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
        <p class="detail-name-address-rating">${venue.name}</p>
        </li>

      <li>
        <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
        <p class="detail-name-address-rating">${venue.address}, ${
  venue.city
}</p>
        </li>

      <li>
        <i title="ratings" class="fas fa-star icon-primary"></i>
        <p class="detail-name-address-rating">${venue.rating}</p>
      </li>

      <li><p class="detail-desc">${venue.description}</p></li>
    </ul>

    <h3 class="title-review">Reviews</h3>

    <div class="detail-review">
    ${venue.customerReviews
      .map(
        (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>

              <p class="review-date">${review.date}</p>
            </div>

            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
      )
      .join('')}
    </div>
  </div>
`;

export default destiDetail;