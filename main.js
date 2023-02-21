var btn =  document.getElementById("btn")
var nav = document.getElementById("nav")
var btnlogo = document.getElementById("btn-logo")
var link = document.querySelector("ul")
btn.addEventListener("click",()=>{
    
    nav.classList.toggle("show")
    btnlogo.classList.toggle("btn-shd")
})
link.addEventListener("click",()=>{
    nav.classList.remove("show")
    
})
