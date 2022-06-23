import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const WishlistVenueIdb = {
  async getVenue(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllVenues() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putVenue(details) {
    return (await dbPromise).put(OBJECT_STORE_NAME, details);
  },
  async deleteVenue(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default WishlistVenueIdb;
