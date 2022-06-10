import LocationSource from '../../data/location-source';

const homePage = {
  async render() {
    return `
    <div class="getStarted">
        <h1>Get Started</h1>
    </div>
    <div class="Description">
        <p>GemFinder adalah aplikasi website dimana anda bisa mencari lokasi hidden gem di seluruh Indonesia.</p>
    </div>
    <div class="findLocation">
      <a href=#/location>Find Your Destination Location Here</a>
      `;
  },

  async afterRender() {
    const locations = await LocationSource.Locations();
    console.log(locations);
  },
};

export default homePage;
