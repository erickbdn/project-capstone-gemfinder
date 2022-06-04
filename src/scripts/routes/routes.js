import VenueList from '../views/pages/venue-list';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': VenueList,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
