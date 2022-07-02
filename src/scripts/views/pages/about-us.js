import { createAboutUsTemplate } from '../templates/template-creator';

const AboutUs = {
  async render() {
    return `
      <div class="content">
        <div id="about-us" class="about-us">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const aboutUsContainer = document.querySelector('#about-us');
    aboutUsContainer.innerHTML += createAboutUsTemplate();
  },
};

export default AboutUs;
