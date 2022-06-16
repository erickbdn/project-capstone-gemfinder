/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createLocationDetailTemplate = (details) => `

<div class="location_info">
    <div class="location_info_header">
        <img class="location_info_image" src="${CONFIG.BASE_IMAGE_URL + details.image}" alt="${details.name}"/>
    </div>
    <div class="location_info_content">
        <h3>Nama Lokasi</h3>
        <p class="location_name">${details.name}</p>
        <h3>Kabupaten / Kota</h3>
        <p class="location_kabupatenkota">${details.kabupatenkota}</p>
        <h3>Provinsi</h3>
        <p class="location_provinsi">${details.provinsi}</p>
        <h3>Alamat</h3>
        <p class="location_address">${details.address}</p>
        <h3>Deskripsi</h3>
        <p class="location_description">${details.description}</p>
        <h3>Rating</h3>
        <p class="location_rating">${details.rating}</p>
    </div>
</div>
`;

const createLocationItemTemplate = (location) => `

<div class="location-item">
    <div class="location-item-header">
        <div class="location-item-header-rating">
            <p>⭐️<span class="location-item-header-rating-score">${location.rating}</span></p>
        </div>
        <div class="location_item_header">
            <img class="location_item_image" src="${CONFIG.BASE_IMAGE_URL + location.image}" alt="${location.name}"/>
        </div>
    </div>
    <div class="location-item-content">
        <h3><a href="${`/#/detail/${location.id}`}">${location.name}</a></h3>
        <p>${location.description}</p>
    </div>
</div>    
`;

export { createLocationDetailTemplate, createLocationItemTemplate };
