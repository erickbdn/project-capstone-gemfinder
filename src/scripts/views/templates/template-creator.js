const createVenueItemTemplate = (venue) => `
  <div class="venue-item">
    <div class="venue-item__header">
        <img tabindex="0" 
            class="venue-item__header__poster" 
            src="${venue.pictureId}" 
            alt="${venue.name}." 
            height="170px"
       />
    </div>
    <div class="venue-item__content">
      <h1 tabindex="-1" class="venue-item__title">
        <a tabindex="0" class="venue-item__content__link" href="${`/#/detail/${venue.id}`}">
          <span class=  venue-item__content__title>
            ${venue.name}
          </span>
        </a>
      </h1>
      <p tabindex="0" class="venue-item__description">${venue.description}</p>
    </div>
  </div>
`;

const createVenueDetailTemplate = (venue) => `
  <h2 class="venue__title">${venue.name}</h2>
  <img class="venue__poster" src="${venue.pictureId}" alt="${venue.name}" />
  <div class="venue__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${venue.city}</p>
    <h4>Rating</h4>
    <p>${venue.rating}</p>
    <h4>Duration</h4>
    <p>${venue.description}</p>
  </div>
  <div class="venue__overview">
    <h3>Overview</h3>
    <p>${venue.rating}</p>
  </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this venue" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this venue" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createVenueItemTemplate,
  createVenueDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
