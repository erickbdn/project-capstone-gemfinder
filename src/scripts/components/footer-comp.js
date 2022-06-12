class FooterComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <footer>
          <div class="footer-logo">
              <center>
                  <img src="./images/heros/GemFinder-logo.png" width="50" height="80" alt="Logo GemFinder">
              </center>
          </div>
          <p>GEMFINDER</p>
          Copyright &copy; 2022 - GemFinder Apps
          </footer>
        `;
  }
}

customElements.define('footer-comp', FooterComp);
