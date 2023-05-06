//header movement
let header = document.querySelector("header");

window.onscroll = function () {
    if (window.scrollY >= header.offsetTop + 200) {
        header.classList.add("header-scroll");
    } else if (window.scrollY == header.offsetTop) {
        header.classList.remove("header-scroll");
    }
}
//show-links appearence
const links = document.querySelector("nav ul");
const burgerIcon = document.querySelector("nav .toggle-menu");
const lis = document.querySelectorAll("nav ul li");

burgerIcon.addEventListener("click", () => {
    links.classList.toggle("show-links");
})

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        e.currentTarget.add("active");
    })
})
//search showing
let search = document.querySelector("nav .form input");
let searchBtn = document.querySelector("nav .form .search-btn");
searchBtn.addEventListener("click", () => {
    search.classList.toggle("show-search");
})