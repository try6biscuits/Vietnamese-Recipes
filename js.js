document.addEventListener('DOMContentLoaded', function() {
  const phoRecipePage = document.querySelector('#phoRecipePage');
  const homePage = document.querySelector('#homePage');
  const springRollRecipePage = document.querySelector('#springRollRecipePage');

  if (phoRecipePage) {
    phoRecipePage.addEventListener("click", reDirectToPhoPage);
  }

  if (homePage) {
    homePage.addEventListener("click", goBackHome);
  }

  if (springRollRecipePage) {
    springRollRecipePage.addEventListener("click", reDirectToSpringRollPage)
  }

  function reDirectToPhoPage() {
    window.location.href = 'phoRecipe.html';
  }

  function reDirectToSpringRollPage() {
    window.location.href = 'springRollRecipe.html'
  }
  function goBackHome() {
    window.location.href = 'homePage.html';
  }
});