import WishlistVenueIdb from '../data/wishlistvenue-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, venue }) {
    this._likeButtonContainer = likeButtonContainer;
    this._venue = venue;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._venue;

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
      await WishlistVenueIdb.putVenue(this._venue);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await WishlistVenueIdb.deleteVenue(this._venue.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
