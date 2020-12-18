const x = document.getElementById("boton_menu");
const y = document.getElementById("lat");

x.addEventListener('click',function(){
    if(window.innerWidth <= 750){
        y.classList.toggle("oculto");
        y.style.width = "60%";
    }else{
        y.classList.toggle("oculto");
        y.style.width = "35%";
    }
})

function cambiar(z){
    const imagen = document.getElementById("imagen");
    if(z==1){
        imagen.src = "src/img/picture1.jpg";
    }else if(z==2){
        imagen.src = "src/img/picture2.jpg";
    }else if(z==3){
        imagen.src = "src/img/picture3.jpg";
    }
}