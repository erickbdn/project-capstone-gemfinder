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
    <h4>Covid Risk Score</h4>
    <h4>Address</h4>
    <p>${detail.address}</p>
    <h4>Rating</h4>
    <p>${detail.rating}</p>
    <h4>Description</h4>
    <p>${detail.description}</p>
  </div>
  <div class="venue__overview">
    <h3>Overview</h3>
    <p>${detail.rating}</p>
    <h3>Jumlah Puskesmas</h3>
    <p>Tercatat Terdapat Sekitar {jumlahPuskesmas} Puskesmas yang Menyediakan Vaksin COVID-19 di daerah {detail.kabupatenkota}</p>
  </div>
</div>
`;

const createAboutUsTemplate = () => `
      <div class="About-Us">
        <h2>About Us</h2>
      </div>
      <div class="gem-desc">
        <h3>GemFinder</h3>
        <p>Salah satu sektor yang terkena dampak dari pandemi Covid-19 adalah sektor pariwisata, terutama lokasi-lokasi yang termasuk hidden gem.
        Akibat dampak tersebut, beberapa lokasi wisata atau destinasi memiliki resiko untuk tutup dan tidak terawat karena kurangnya pendapatan
        akibat dari sedikitnya pengunjung, dan hal ini bisa menyebabkan berkurangnya lokasi pariwisata di Indonesia. Tetapi seiring berjalannya waktu
        dan kasus Covid-19 di Indonesia mulai mereda banyak orang mulai beraktivitas kembali sehingga sektor pariwisata dapat berjalan kembali. Maka dari itu
        kami membuat website dimana anda bisa mencari lokasi hidden gem tersebut yang kami dapatkan melalui survey.
        </p>
        <div class="kelompok">
          <h3>Kelompok CPSG-76</h3>
        </div>
      </div>
          <div class="row-profile">
            <div class="col-4">
              <div class="profile-content">
                <img src="${CONFIG.BASE_IMAGE_URL}fawwaz.jpg" alt="Fawwaz Kautsar">
                <h3>Fawwaz Kautsar</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="profile-content">
                <img src="${CONFIG.BASE_IMAGE_URL}indra.jpg" alt="Indra Setiawan">
                <h3>Indra Setiawan</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="profile-content">
                <img src="${CONFIG.BASE_IMAGE_URL}zhafran.jpg" alt="Zhafran Afif">
                <h3>Zhafran Afif</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="profile-content">
                <img src="${CONFIG.BASE_IMAGE_URL}erick.jpg" alt="Tederick Budiono">
                <h3>Tederick Budiono</h3>
              </div>
            </div>
`;

const createRiskTemplate = (kota) => `
<p>${kota}</p>
<p>${hasil}</p>
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
  createRiskTemplate,
  createAboutUsTemplate,
};
