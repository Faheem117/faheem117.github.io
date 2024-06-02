//translation aside
let trAside = document.querySelector(".tr-aside");
let trTable = document.querySelector(".tr-aside table");
let trToggle = document.querySelector(".tr-toggle");
let trToggleStatus = false;

let navAside = document.querySelector(".nav-aside");
let navList = document.querySelector(".nav-aside ul");
let navToggle = document.querySelector(".nav-toggle");
let navToggleStatus = false;
let main = document.querySelector("main");

trToggle.addEventListener("click", () => {
    if (navToggleStatus == false) {
        if (trToggleStatus == false) {
            trAside.style.width = "300px";
            trTable.style.visibility = "visible";
            trToggleStatus = true;
        } else {
            trAside.style.width = "60px"
            trTable.style.visibility = "hidden"
            trToggleStatus = false;
        }
    }
})

navToggle.addEventListener("click", () => {
    if (navToggleStatus == false) {
        navAside.style.width = "250px";
        navList.style.visibility = "visible";
        trToggle.classList.toggle("tr-toggle-on");
        main.style.opacity = "50%";
        document.body.style.overflow = "hidden";
        navToggleStatus = true;
    } else {
        navAside.style.width = "60px"
        navList.style.visibility = "hidden"
        trToggle.classList.toggle("tr-toggle-on");
        main.style.opacity = "100%";
        document.body.style.overflow = "visible";
        navToggleStatus = false;
    }
})