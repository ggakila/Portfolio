const menu = document.querySelector(".menu")
const menubutton = document.querySelector(".menubutton")

menubutton.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
})