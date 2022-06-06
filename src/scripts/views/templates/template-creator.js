const createVenueItemTemplate = (venue) => `
    <article tabindex="-1" class="post-item">
    <img tabindex="0" 
        class="post-item__thumbnail" 
        src="${venue.pictureId}" 
        alt="Salah satu gambar venue." 
        height="250px"
    >
    <div class="post-item__content">
        <h1 tabindex="-1" class="post-item__title">
            <a tabindex="0" href="${`/#/detail/${venue.id}`}">
                ${venue.name}
            </a> 
            <span tabindex="0" class="post-item_star">
                &bigstar; ${venue.rating}
            </span>
        </h1>
        <p tabindex="0" class="post-item__description">${venue.description}</p>
    </div>
    </article>
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
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createVenueItemTemplate,
  createVenueDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
