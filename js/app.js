const x = document.getElementById("boton_menu");
const y = document.getElementById("lat");

x.addEventListener('click',function(){
    y.classList.toggle("oculto");
    y.style.width = "35%";
})