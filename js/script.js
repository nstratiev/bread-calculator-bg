// Button elements
const btnToTop = document.querySelector('#btn-to-top');

// -- Button-to-top listeners
window.addEventListener('scroll', onScreenScroll);
btnToTop.addEventListener('click', goToScreenTop);

setInitialLocalStorage();

// FUNCTIONS
// --- Screen scroll functions
function onScreenScroll() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    btnToTop.style.display = 'block';
  } else {
    btnToTop.style.display = 'none';
  }
}

function goToScreenTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Local Storage functions

function setInitialLocalStorage() {
  const sourdoughStorage = localStorage.getItem('sourdoughCalculators');
  const yeastStorage = localStorage.getItem('yeastCalculators');
  const banicaStorage = localStorage.getItem('banicaCalculators');

  if (sourdoughStorage === null) {
    localStorage.setItem('sourdoughCalculators', JSON.stringify({}));
  }

  if (yeastStorage === null) {
    localStorage.setItem('yeastCalculators', JSON.stringify({}));
  }

  if (banicaStorage === null) {
    localStorage.setItem('banicaCalculators', JSON.stringify({}));
  }

}