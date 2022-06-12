import GemfinderSource from '../../data/gemfinder-source';
import templateCreator from '../templates/template-creator';
import Loaded from '../templates/load';

const Home = {
  async render() {
    return `
        <div class="container">
            <div id="loading"></div>
            
            <div id="main-container">
            <article class="headline">
            <figure class="headline__figure">
                <img src="images/heros/raja-ampat.jpg" alt="wisata raja ampat">
                <figcaption>Raja Ampat Mei 2022 Infographic</figcaption>
            </figure>
            <div class="headline__content">
                <h1 class="headline__title">#ceritaliburan : Story of Holiday</h1>
                <p class="headline__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
                    facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. Accusantium ad amet
                    asperiores, aut commodi corporis dicta distinctio ducimus expedita itaque laudantium magnam maiores,
                    nobis obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta veniam vero
                    vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio vero. Laudantium!</p>
                <button class="headline__button">Read More</button>
            </div>
            </article>
                <h1 class="main-content__title">Destinasi</h1>

                <section id="explore-restaurant"></section>
            </div>
            <h2 class="section-title">Inspirasi Perjalanan</h2>
                  <div class="card-img-inspiration">
                      
                          <div class="col-ig-item" data-index="0">
                                  <img src="images/rinjani-v1.jpg" class="img-item-card"  alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                          <div class="col-ig-item1" data-index="1">
                                  <img src="images/gili-meno-v1.jpg" class="img-item-card" alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                          <div class="col-ig-item2" data-index="2">
                                  <img src="images/kebun-raya-bogor-v1.jpg" class="img-item-card" alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                          <div class="col-ig-item3" data-index="3">
                                  <img src="images/pulau-padar-v1.jpg" class="img-item-card" alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                          <div class="col-ig-item4" data-index="4">
                                  <img src="images/komodo-nasional.jpg" class="img-item-card" alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                          <div class="col-ig-item5" data-index="5">
                                  <img src="images/bogor-v1.jpg" class="img-item-card" alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                          <div class="col-ig-item6" data-index="6">
                                  <img src="images/pulau-kelor-v1.jpg" class="img-item-card" alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                          <div class="col-ig-item7" data-index="7">
                                  <img src="images/borobudur-v1.jpg" class="img-item-card" alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                          <div class="col-ig-item8" data-index="8">
                                  <img src="images/likupang-v1.jpg" class="img-item-card" alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                          <div class="col-ig-item9" data-index="9">
                                  <img src="images/samosir-v1.jpg" class="img-item-card" alt="" loading="lazy"/>
                                  <i class="fa fa-instagram text-end p-2 text-white"></i>
                          </div>
                      
                  </div>
          
                  <div class="break-line mt-5">
                    <hr/>
                  </div>
        </div>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const listContainer = document.querySelector('#explore-restaurant');

    mainContainer.style.display = 'none';
    loading.innerHTML = Loaded();

    try {
      const data = await GemfinderSource.getDestinasiList();

      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += templateCreator(restaurant);
      });

      loading.style.display = 'none';
      mainContainer.style.display = 'block';
    } catch (err) {
      console.error(err);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${err.message}`;
      // initSwalError(err.message);
    }
  },
};

export default Home;
