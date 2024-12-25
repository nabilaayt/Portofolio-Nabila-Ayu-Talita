const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hamburgerLines = document.querySelectorAll("#hamburger span");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");

    hamburgerLines.forEach(line =>{
        line.classList.toggle("bg-secondaryTextColor");
    });
});