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
  localStorage.setItem('sourdoughCalculators', JSON.stringify({}));
  localStorage.setItem('yeastCalculators', JSON.stringify({}));
  localStorage.setItem('banicaCalculators', JSON.stringify({}));
}