import Location from '../views/pages/location';
import locationDetail from '../views/pages/location-detail';
import homePage from '../views/pages/home-page';
import Wishlist from '../views/pages/wishlist';

const routes = {
  '/': homePage, // default page
  '/wishlist': Wishlist,
  '/location': Location,
  '/locationDetail/:id': locationDetail,
};

export default routes;
