// import { createRiskTemplate } from '../templates/template-creator';
import LocationSource from '../../data/locationsource';

const Risk = {
  async render() {
    return `
      <div id="risk" class="risk"</div>
    `;
  },

  async afterRender() {
    const risk = await LocationSource.riskScoreCovid();
    console.log(risk);
    // const riskContainer = document.querySelector('#risk');
    // riskContainer.innerHTML = createRiskTemplate(risk);
  },
};

export default Risk;
