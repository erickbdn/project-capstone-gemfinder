import CONFIG from '../../globals/config';

const createVenueItemTemplate = (location) => `
<div class="venue-item">
    <div class="venue-item__header">
        <img tabindex="0" 
            class="venue-item__header__poster" 
            src="${CONFIG.BASE_IMAGE_URL + location.image}" 
            alt="${location.name}." 
            height="170px"
       />
       <div class="venue-item__header__rating">
            <p>⭐️<span class="venue-item__header__rating__score">${location.rating || '-'}</span></p>
        </div>
    </div>
    <div class="venue-item__content">
      <h1 tabindex="-1" class="venue-item__title">
        <a tabindex="0" class="venue-item__content__link" href="${`/#/detail/${location.id}`}">
          <span class=  venue-item__content__title>
            ${location.name}
          </span>
        </a>
      </h1>
      <p tabindex="0" class="venue-item__description">${location.description}</p>
    </div>
  </div>
`;

const createVenueDetailTemplate = (detail) => `
<h2 class="venue__title">${detail.name}</h2>
  <img class="venue__poster" src="${CONFIG.BASE_IMAGE_URL + detail.image}" alt="${detail.name}" />
  <div class="venue__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${detail.kabupatenkota}</p>
    <h4>Rating</h4>
    <p>${detail.rating}</p>
    <h4>Description</h4>
    <p>${detail.description}</p>
  </div>
  <div class="venue__overview">
    <h3>Overview</h3>
    <p>${detail.rating}</p>
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
