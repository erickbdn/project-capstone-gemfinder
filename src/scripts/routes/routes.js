import Home from '../views/pages/home';
import Wishlist from '../views/pages/wishlist';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/wishlist': Wishlist,
  '/resto/:id': Detail,
};

export default routes;
