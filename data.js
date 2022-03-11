const showMore = document.querySelector('.show-more');
const speakersSection = document.querySelector('.speekers');
const speekersIntervenant = [{
  name: 'Tessa khan',
  picture: './assets/tessa.png',
  titre: 'Environmental lawyer',
  job: 'Khan cofounded the Climate Litigation Network',
}, {
  name: 'Rhiana Gunn',
  picture: './assets/rhuana.png',
  titre: 'An author',
  job: 'Climate Policy Director at the Roosevelt Institute ',
}, {
  name: 'Emmanuel Macron',
  picture: './assets/macron.png',
  titre: 'President of France',
  job: 'France mobilizes nearly 7 billion dollars to adaptation the climate',
}, {
  name: 'António Guterres',
  picture: '/assets/antonio.png',
  titre: 'General secretary of UN',
  job: `he fights the destruction of the climate 
  through sanctions to ensure a future for the next generation`,
}, {
  name: 'William Cro',
  picture: './assets/prof.png',
  titre: 'Member of British Acadeny',
  job: 'Renowned environmental historian',
}, {
  name: 'Oguju Ombongon',
  picture: './assets/oguju.png',
  titre: 'President of Gabon',
  job: 'Autor of "Leaders at Cop26 must incentivise protecting forests like the Congo Basin"',
}];

const mainProjects = document.querySelector('.speekers');
mainProjects.innerHTML = '';
speekersIntervenant.forEach((project, index) => {
  let card = `<li class="speekers-item">
  <div class= "one">
    <img class="peekers-picrure" src="${project.picture}">
  </div>
  <div class="speeker-info">
    <h3 class="name">${project.name}</h3>
    <p class="titre">${project.titre}</p>
    <p class="speeker-detail">${project.job}</p>
  </div>
  </li>`;
  if (index >= 2) {
    card = `<li class="hidden">
    <div class= "one">
      <img class="peekers-picrure" src="${project.picture}"/>
    </div>
    <div class="speeker-info">
      <h3 class="name">${project.name}</h3>
      <p class="titre">${project.titre}</p>
      <p class="speeker-detail">${project.job}</p>
    </div>
    </li>`;
  }
  mainProjects.innerHTML += card;
});

showMore.addEventListener('click', (e) => {
  e.preventDefault();
  speakersSection.classList.toggle('expand');
  if (speakersSection.classList.contains('expand')) {
    document.querySelector('.show-more').innerHTML = 'LESS';
  } else {
    document.querySelector('.show-more').innerHTML = 'MORE';
  }
});