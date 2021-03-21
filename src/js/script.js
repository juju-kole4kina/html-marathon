"use strict"

//Прокрутка
const menuLinks = document.querySelectorAll('.menu-list__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      console.log(menuLink)
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      e.stopPropagation()
      const menuLink = e.target;
      console.log(menuLink);
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {

         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}




//alert("WTF????????????????????????????????")