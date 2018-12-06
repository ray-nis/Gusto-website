let navList = document.getElementById("list");
let hambIcon = document.getElementById("menu-icon");

hambIcon.addEventListener("click", ()=> {
    if (navList.className == "none") {
        navList.className = "responsive";
    }
    else {
        navList.className = "none";
    }});




let navHeader = document.getElementById("nav-bar");

function runOnScroll() {
    let windowY = Math.ceil(window.scrollY);
    if (windowY > 170) {
      navHeader.style.backgroundColor = "#40403D";
      }
    else {
        navHeader.style.backgroundColor = "transparent";
    }
 }; 

window.addEventListener("scroll", runOnScroll);