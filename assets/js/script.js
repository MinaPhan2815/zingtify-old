
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * menu navbar trên mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });

}
/**
 * lấy năm ở footer
 */

const date = document.querySelector('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

/**
 * lên đầu trang
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 200 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});