const homePage = {
  async render() {
    return `
    <div class="getStarted">
        <h1>Get Started</h1>
    </div>
    <div class="Description">
        <p>GemFinder adalah aplikasi website dimana anda bisa mencari lokasi hidden gem di seluruh Indonesia.</p>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default homePage;
