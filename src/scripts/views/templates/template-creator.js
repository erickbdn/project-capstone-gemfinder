const createRestoItemTemplate = (venue) => `
    <article tabindex="-1" class="post-item">
    <img tabindex="0" 
        class="post-item__thumbnail" 
        src="${venue.pictureId}" 
        alt="Salah satu gambar restoran." 
        height="250px"
    >
    <div class="post-item__content">
        <h1 tabindex="-1" class="post-item__title">
            <a tabindex="0" href="#">
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

export {
  createRestoItemTemplate,
};
