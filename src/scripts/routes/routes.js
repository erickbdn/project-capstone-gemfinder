import Location from '../views/pages/location';
import locationDetail from '../views/pages/location-detail';
import homePage from '../views/pages/home-page';
import Wishlist from '../views/pages/wishlist';

const routes = {
  '/': homePage,
  '/wishlist': Wishlist,
  '/location': Location,
  '/detail/:id': locationDetail,
};

export default routes;
