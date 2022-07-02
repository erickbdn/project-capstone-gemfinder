import VenueList from '../views/pages/venue-list';
import Wishlist from '../views/pages/wishlist';
import Detail from '../views/pages/detail';
import VenueFullList from '../views/pages/venue-full-list';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': VenueList,
  '/list': VenueFullList,
  '/wishlist': Wishlist,
  '/detail/:id': Detail,
  '/about': AboutUs,
};

export default routes;
