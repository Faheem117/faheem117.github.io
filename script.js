let mdToggle = document.querySelector(".md-toggle");
let modeStatus = "light";

//translation aside
let trAside = document.querySelector(".tr-aside");
let trTable = document.querySelector(".tr-aside table");
let trToggle = document.querySelector(".tr-toggle");
let trToggleStatus = false;

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

//navigation aside
let navAside = document.querySelector(".nav-aside");
let navList = document.querySelector(".nav-aside ul");
let navToggle = document.querySelector(".nav-toggle");
let navToggleStatus = false;
let main = document.querySelector("main");

navToggle.addEventListener("click", () => {
    if (navToggleStatus == false) {
        navAside.style.width = "250px";
        navList.style.visibility = "visible";
        trToggle.classList.toggle("tr-toggle-on");
        main.style.opacity = "65%";
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

//light mode/dark mode
let body = document.querySelector("body");
let text = document.querySelectorAll("h1, h2, h3, li, td, a");
let hr = document.querySelectorAll("hr");

mdToggle.addEventListener("click", () => {
        if (modeStatus == "dark") {
            body.classList.replace("dark", "light");
            trToggle.classList.replace("dark", "light");
            trAside.classList.replace("dark", "light");
            navToggle.classList.replace("dark", "light");
            navAside.classList.replace("dark", "light");
            mdToggle.classList.replace("dark", "light");
            text.forEach(a => {a.style.color = "#111";});
            hr.forEach(a => {a.style.backgroundColor = "#111";});
            modeStatus = "light";
        } else {
            body.classList.replace("light", "dark");
            trToggle.classList.replace("light", "dark");
            trAside.classList.replace("light", "dark");
            navToggle.classList.replace("light", "dark");
            navAside.classList.replace("light", "dark");
            mdToggle.classList.replace("light", "dark");
            text.forEach(a => {a.style.color = "#eee";});
            hr.forEach(a => {a.style.backgroundColor = "#eee";});
            modeStatus = "dark";
        }
})
