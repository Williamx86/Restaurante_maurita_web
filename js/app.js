const x = document.getElementById("boton_menu");
const y = document.getElementById("lat");

x.addEventListener('click', function () {
    if (window.innerWidth <= 750) {
        y.classList.toggle("oculto");
        y.style.width = "60%";
    } else {
        y.classList.toggle("oculto");
        y.style.width = "35%";
    }
})

function cambiar(z) {
    const imagen = document.getElementById("imagen");
    if (z == 1) {
        imagen.src = "src/img/picture1.jpg";
        imagen.style.animation = "derecha22 1s";
    } else if (z == 2) {
        imagen.src = "src/img/picture2.jpg";
        imagen.style.animation = "derecha33 1s";
    } else if (z == 3) {
        imagen.src = "src/img/picture3.jpg";
        imagen.style.animation = "derecha44 1s";
    }
}

if (document.getElementById("imagens")) {
    const cambio = document.getElementById("imagens");

    function cambiarslider(key) {
        if (key == 1) {
            cambio.src = "src/img/picture1.jpg";
            cambio.style.animation = "derecha2 1s";
        } else if (key == 2) {
            cambio.src = "src/img/picture2.jpg";
            cambio.style.animation = "derecha3 1s";
        } else if (key == 3) {
            cambio.src = "src/img/picture3.jpg";
            cambio.style.animation = "derecha4 1s";
        }
    }
}

window.addEventListener('load', function () {
    if (document.getElementById("imagens")) {
        var cuadro = document.getElementById("imagens");

        var i = 0;

        setTimeout(function () {
            i++;
            let imagenes = ["src/img/picture2.jpg", "src/img/picture1.jpg", "src/img/picture3.jpg"];
            cuadro.src = imagenes[i];
            cuadro.style.animation = "derecha3 1s";
            setTimeout(function () {
                i++;
                let imagenes = ["src/img/picture2.jpg", "src/img/picture1.jpg", "src/img/picture3.jpg"];
                cuadro.src = imagenes[i];
                cuadro.style.animation = "derecha4 1s";
            }, 3000);
        }, 3000);

    }

    if (document.getElementById("imagen")) {
        var cuadro = document.getElementById("imagen");

        var i = 0;

        setTimeout(function () {
            i++;
            let imagenes = ["src/img/picture1.jpg", "src/img/picture2.jpg", "src/img/picture3.jpg"];
            cuadro.src = imagenes[i];
            cuadro.style.animation = "derecha33 1s";
            setTimeout(function () {
                i++;
                let imagenes = ["src/img/picture1.jpg", "src/img/picture2.jpg", "src/img/picture3.jpg"];
                cuadro.src = imagenes[i];
                cuadro.style.animation = "derecha44 1s";
            }, 3500);
        }, 3000);

    }
})