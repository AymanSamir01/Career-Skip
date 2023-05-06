//header movement
let header = document.querySelector("header");

window.onscroll = function () {
    if (window.scrollY >= header.offsetTop + 200) {
        header.classList.add("header-scroll");
    } else if (window.scrollY == header.offsetTop) {
        header.classList.remove("header-scroll");
    }
}

//images sliders Tablet && Mobile
let rightBtn = document.querySelector(".right-btn");
let leftBtn = document.querySelector(".left-btn");
let text = document.querySelector(".text");
let bullets = document.querySelectorAll(".bullet");
let imageContainer = document.querySelector(".swipe-image");
let img = document.querySelector(".swipe-image img");
let imgArr = ["swip-1", "swip-2", "swip-3", "swip-4"];
let textArr = ["التعليم: لم نحدد القيمة المالية لحصص مجموعات الدعم المدرسية", "رئيس الوزراء: قرار رئيس الجمهورية بمكافحة الإرهاب تزامنا مع التنمية قرار حكيم", "خليك واعى.. لا إيقاف لبطاقات التموين بسبب عدم استقبال رسالة الصرف", "افضل لاعب كره قدم"]
let count = 0


window.addEventListener("DOMContentLoaded", (() => {
    img.src = `./images/${imgArr[count]}.jpg`;
    bullets[count].classList.add("active");
}))
rightBtn.addEventListener("click", () => {
    bullets[count].classList.remove("active");
    count++;
    if (count > imgArr.length - 1) {
        count = 0;
    }
    img.src = `./images/${imgArr[count]}.jpg`;
    text.innerHTML = textArr[count];
    bullets[count].classList.add("active");
})
leftBtn.addEventListener("click", () => {
    bullets[count].classList.remove("active");
    count--;
    if (count < 0) {
        count = imgArr.length - 1;
    }
    img.src = `./images/${imgArr[count]}.jpg`;
    text.innerHTML = textArr[count];
    bullets[count].classList.add("active");
})


setInterval(() => {
    swipeMovment();
}, 3000);


function swipeMovment() {
    bullets[count].classList.remove("active");
    count++;
    if (count > imgArr.length - 1) {
        count = 0;
    }
    img.src = `./images/${imgArr[count]}.jpg`;
    text.innerHTML = textArr[count];
    bullets[count].classList.add("active");
    bullets[count].style.transition = ".3s"
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
        e.currentTarget.toggle("active");
    })
});

//search showing
let search = document.querySelector("nav .form input");
let searchBtn = document.querySelector("nav .form .search-btn");
searchBtn.addEventListener("click", () => {
    search.classList.toggle("show-search");
})