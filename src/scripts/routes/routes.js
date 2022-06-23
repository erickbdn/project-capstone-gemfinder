import VenueList from '../views/pages/venue-list';
import VenueFullList from '../views/pages/venue-full-list';
import Wishlist from '../views/pages/wishlist';
import Detail from '../views/pages/detail';

const routes = {
  '/': VenueList,
  '/list': VenueFullList,
  '/wishlist': Wishlist,
  '/detail/:id': Detail,
};

export default routes;
