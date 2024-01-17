document.addEventListener('DOMContentLoaded', function() {
  const phoRecipePage = document.querySelector('#phoRecipePage');
  const springRollRecipePage = document.querySelector('#springRollRecipePage');
  const BunaChaRecipePage = document.querySelector('#BunaChaRecipePage');
  const homePage = document.querySelector('#homePage');

  if (phoRecipePage) {
    phoRecipePage.addEventListener("click", reDirectToPhoPage);
  }

  if (springRollRecipePage) {
    springRollRecipePage.addEventListener("click", reDirectToSpringRollPage)
  }

  if (BunaChaRecipePage) {
    BunaChaRecipePage.addEventListener("click", reDirectToBunaChaRecipePage)
  }

  if (homePage) {
    homePage.addEventListener("click", goBackHome);
  }

  function reDirectToPhoPage() {
    window.location.href = 'phoRecipe.html';
  }

  function reDirectToSpringRollPage() {
    window.location.href = 'springRollRecipe.html'
  }

  function reDirectToBunaChaRecipePage() {
    window.location.href = 'BunaChaRecipe.html'
  }

  function goBackHome() {
    window.location.href = 'homePage.html';
  }
});