document.addEventListener('DOMContentLoaded', function() {
  const phoRecipePage = document.querySelector('#phoRecipePage');
  const homePage = document.querySelector('#homePage');

  if (phoRecipePage) {
    phoRecipePage.addEventListener("click", reDirect);
  }

  if (homePage) {
    homePage.addEventListener("click", goBack);
  }

  function reDirect() {
    window.location.href = 'phoRecipe.html';
  }

  function goBack() {
    window.location.href = 'homePage.html';
  }
});