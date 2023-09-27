document.getElementById('tu-boton').addEventListener('click', function() {
    iniciarCamara();
  });
  
  function iniciarCamara() {
    // Obten el elemento de video
    var videoElement = document.getElementById('arjs-video');
  
    // Inicia la cámara usando AR.js
    var source = new THREEx.ArToolkitSource({
      sourceType: 'webcam',
    });
  
    source.init(function onReady() {
      // Cuando la cámara esté lista, actualiza el tamaño del visor de video
      source.onResizeElement()
      source.copyElementSizeTo(videoElement)
      videoElement.play()
  
      // Ahora puedes inicializar AR.js
      iniciarARJS();
    });
  }
  
  function iniciarARJS() {
    // Configura tu AR.js según lo necesites
    // ...
  }

  document.getElementById('tarjetaPlantilla').addEventListener('click', function() {
    if (this.classList.contains('rotate')) {
      this.classList.remove('rotate');
    } else {
      this.classList.add('rotate');
    }
  });
  
  