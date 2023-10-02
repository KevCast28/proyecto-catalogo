// Función para verificar si el usuario está en un dispositivo móvil
function esDispositivoMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Función para redirigir a la página de la cámara
function redirigir() {
    window.location.href = "cam-page.html";
}

// Función para iniciar AR en dispositivos móviles
function iniciarAR() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                const videoElement = document.createElement('video');
                videoElement.srcObject = stream;
                videoElement.play();

                const arSource = new THREEx.ArSource({
                    sourceType: 'webcam',
                });

                arSource.ready(function (source) {
                    const arContext = new THREEx.ArContext({
                        sourceWidth: arSource.domElement.width,
                        sourceHeight: arSource.domElement.height,
                    });

                    const arMarker = new THREEx.ArMarkerControls(arContext, camera, {
                        type: 'pattern',
                        patternUrl: 'marker.patt', // Ruta de tu archivo .patt
                    });

                    arMarker.addEventListener('markerFound', function () {
                        // Acciones cuando se encuentra el marcador
                    });

                    arMarker.addEventListener('markerLost', function () {
                        // Acciones cuando se pierde el marcador
                    });
                });
            })
            .catch(error => console.error('Error al acceder a la cámara:', error));
    } else {
        console.error('getUserMedia no es compatible en este navegador');
    }
}

// Función para mostrar el botón solo en dispositivos móviles
function mostrarBoton() {
    if (esDispositivoMovil()) {
        var boton = document.createElement("button");
        boton.textContent = "Ver imágenes con AR";
        boton.onclick = redirigir;
        boton.id = "iniciarAR";
        document.body.appendChild(boton);
        boton.classList.add("btn", "btn-large", "btn-primary");

        boton.style.display = "block";
        boton.style.margin = "0 auto"
    }
}

// Llamar a la función para mostrar el botón
mostrarBoton();

// Agregar un evento de clic al botón solo si es un dispositivo móvil
const botonIniciarAR = document.getElementById('iniciarAR');
if (botonIniciarAR) {
    botonIniciarAR.addEventListener('click', iniciarAR);
}

const scene = documen.querySelector("a-scene");

objetos.AR.forEach(objeto => {
    const marker = document.createElement("a-marker");
    marker.setAttribute("type", "pattern");
    marker.setAttribute("url", objeto.Pattern);

    const entidad = document.createElement("a-image");
    entidad.setAttribute("url", objeto.Modelo);
    entidad.setAttribute("scale", "2 2 2");

    marker.appendChild(entidad);
    scene.appendChild(marker);
});
