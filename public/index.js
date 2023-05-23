const menu = document.querySelector(".menu")
const menubutton = document.querySelector(".menubutton")
const menulinks = document.querySelectorAll(".menulink")

menubutton.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
})

 menulinks.forEach(menulink => {
     menulink.addEventListener("click", ()=>{
         menu.classList.toggle("hidden")
     })
 });