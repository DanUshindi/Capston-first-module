const showMore = document.querySelector('.show-more');
const speakersSection = document.querySelector('.speekers');
const speekersIntervenant = [{
  name: 'Tessa khan',
  picture: 'one',
  titre: 'Environmental lawyer',
  job: 'Khan cofounded the Climate Litigation Network',
}, {
  name: 'Rhiana Gunn',
  picture: 'two',
  titre: 'An author',
  job: 'Climate Policy Director at the Roosevelt Institute ',
}, {
  name: 'Emmanuel Macron',
  picture: 'three',
  titre: 'President of France',
  job: 'France mobilizes nearly 7 billion dollars to adaptation the climate',
}, {
  name: 'António Guterres',
  picture: 'four',
  titre: 'General secretary of UN',
  job: `he fights the destruction of the climate 
  through sanctions to ensure a future for the next generation`,
}, {
  name: 'William Cro',
  picture: 'five',
  titre: 'Member of British Acadeny',
  job: 'Renowned environmental historian',
}, {
  name: 'Ali Bongon',
  picture: 'six',
  titre: 'President of Gabon',
  job: 'Autor of "Leaders at Cop26 must incentivise protecting forests like the Congo Basin"',
}];

const mainProjects = document.querySelector('.speekers');
mainProjects.innerHTML += speekersIntervenant.map((project, index) => {
  let card = `<li class="speekers-item">
  <div class= "${project.picture}">
    <div class="speeker-behind"></div>
  </div>
  <div class="speeker-info">
    <h3 class="name">${project.name}</h3>
    <p class="titre">${project.titre}</p>
    <p class="speeker-detail">${project.job}</p>
  </div>
  </li>`;
  if (index >= 2) {
    card = `<li class="hidden">
    <div class= '${project.picture}'>
      <div class="speeker-behind"></div>
    </div>
    <div class="speeker-info">
      <h3 class="name">${project.name}</h3>
      <p class="titre">${project.titre}</p>
      <p class="speeker-detail">${project.job}</p>
    </div>
    </li>`;
  }
  return card;
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