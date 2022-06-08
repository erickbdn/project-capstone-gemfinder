import VenueList from '../views/pages/venue-list';
import Wishlist from '../views/pages/wishlist';
import Detail from '../views/pages/detail';

const routes = {
  '/': VenueList,
  '/wishlist': Wishlist,
  '/detail/:id': Detail,
};

export default routes;
