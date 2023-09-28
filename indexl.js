//NavBar
const toggleBtn=document.querySelector(".toggle_btn")
const toggleBtnIcon=document.querySelector(".toggle_btn i")
const dropdownMenu=document.querySelector(".dropdown_menu")

toggleBtn.addEventListener("click",function(){
    dropdownMenu.classList.toggle("open")
    const isOpen=dropdownMenu.classList.contains("open")

    toggleBtnIcon.classList=isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
})

//Carrousel Auto
let counter=1

setInterval(function(){
  document.getElementById("radio" + counter).checked=true
  counter++

  if(counter > 3){
    counter=1
  }
},3000)
