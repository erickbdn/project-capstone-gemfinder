import WishlistDestinasiIdb from '../../data/wishlistdestinasi-idb';
import templateCreator from '../templates/template-creator';

const Wishlist = {
  async render() {
    return `
        <div class="container">
            <h2 class="title-container">Wishlist Destinasi</h2>

            <section id="wishlist-gemfinder"></section>
        </div>
      `;
  },

  async afterRender() {
    const data = await WishlistDestinasiIdb.getAllDestinasi();

    const WishlistDestContainer = document.querySelector('#wishlist-gemfinder');

    if (data.length === 0) {
      WishlistDestContainer.innerHTML = `
        Empty favorite Resto. Put one, by clicking heart button in the detail page.
      `;
    }

    data.forEach((venue) => {
      WishlistDestContainer.innerHTML += templateCreator(venue);
    });
  },
};

export default Wishlist;
