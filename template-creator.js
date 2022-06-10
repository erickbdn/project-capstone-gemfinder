/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createLocationDetailTemplate = (details) => `

<div class="location_info">
    <div class="location_info_content">
        <h2>Nama Lokasi</h2>
        <p class="location_name">${details.name}</p>
        <h2>Kabupaten / Kota</h2>
        <p class="location_kabupatenkota">${details.kabupatenkota}</p>
        <h2>Provinsi</h2>
        <p class="location_provinsi">${details.provinsi}</p>
        <h2>Alamat</h2>
        <p class="location_address">${details.address}</p>
        <h2>Deskripsi</h2>
        <p class="location_description">${details.description}</p>
        <h2>Rating</h2>
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
    </div>
    <div class="location-item-content">
        <h3><a href="${`/#/detail/${location.id}`}">${location.name}</a></h3>
        <p>${location.description}</p>
    </div>
</div>    
`;

export { createLocationDetailTemplate, createLocationItemTemplate };
