import VenueList from '../views/pages/venue-list';
import VenueFullList from '../views/pages/venue-full-list';
import Wishlist from '../views/pages/wishlist';
import Detail from '../views/pages/detail';
import Risk from '../views/pages/risk';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': VenueList,
  '/list': VenueFullList,
  '/wishlist': Wishlist,
  '/detail/:id': Detail,
  '/about': AboutUs,
  '/risk': Risk,
};

export default routes;
