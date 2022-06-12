import CONFIG from '../../globals/config';

const templateCreator = (venue) => `
    <div class="card">
      <a href="#/resto/${venue.id}" class="card-a-tag">
        <div class="img-container">
          <img class="card-image" crossorigin="anonymous" alt="${
            venue.name
          }" src="${CONFIG.BASE_IMAGE_URL + venue.pictureId}"/>
          <span class="card-rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${venue.rating}</span>
          </span>
        </div>

        <div class="card-content">
          <h2 tabindex="0" class="card-content-title">${venue.name}</h2>
          <p class="card-city">${venue.city}</p>
          <p class="truncate">${venue.description}</p>
        </div>
      </a>
    </div>
  `;

export default templateCreator;