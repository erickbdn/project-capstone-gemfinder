import WishlistVenueIdb from '../data/wishlistvenue-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const Swal = require('sweetalert2');

const LikeButtonInitiator = {
  async init({ likeButtonContainer, details }) {
    this._likeButtonContainer = likeButtonContainer;
    this._details = details;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._details;

    if (await this._isVenueExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isVenueExist(id) {
    const venue = await WishlistVenueIdb.getVenue(id);
    return !!venue;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await WishlistVenueIdb.putVenue(this._details);
      Swal.fire(
        'Yaaayy!',
        'Your preferred destination was successfully added to the wishtlist page',
        'success',
      );
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await WishlistVenueIdb.deleteVenue(this._details.id);
      Swal.fire(
        'Oopsie! :(',
        'Your selected destination is removed from wishlist',
        'error',
      );
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
