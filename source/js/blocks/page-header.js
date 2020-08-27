let headerToggler = document.querySelector('.page-header__hamburger-toggler');
if (headerToggler) {
  let headerTogglerTop = document.querySelector('.hamburger-toggler__top-bar');
  let headerTogglerMiddle = document.querySelector('.hamburger-toggler__middle-bar');
  let headerTogglerBottom = document.querySelector('.hamburger-toggler__bottom-bar');
  let headerMainNav = document.querySelector('.page-header__main-nav');
  headerToggler.classList.add('page-header__hamburger-toggler--js-on', 'page-header__hamburger-toggler--closed');
  headerMainNav.classList.add('page-header__main-nav--closed');
  headerToggler.onclick = function() {
    headerToggler.classList.toggle('page-header__hamburger-toggler--closed');
    headerMainNav.classList.toggle('page-header__main-nav--closed');
  };
};
