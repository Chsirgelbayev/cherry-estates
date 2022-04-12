const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

let btnShowMoreCards = document.querySelector(".btn-more");
const hiddenCards = document.querySelectorAll(".card-link--hidden");

const widgets = document.querySelectorAll(".widget");
const sidebarToggleBtn = document.querySelector(".menu-icon-wrapper");

sidebarToggleBtn.onclick = () => {
  menuIcon.classList.toggle("menu-icon-active");
  sidebar.classList.toggle("sidebar--mobile-active");
};

btnShowMoreCards.addEventListener("click",() =>{
  hiddenCards.forEach(function (card) {
    card.classList.remove("card-link--hidden");
  });
});

widgets.forEach(widget => {
  widget.addEventListener("click", function (e) {
    if (e.target.classList.contains("widget__title")) {
      e.target.classList.toggle("widget__title--active");
      e.target.nextElementSibling.classList.toggle("widget__body--hidden");
    }
  });
});
