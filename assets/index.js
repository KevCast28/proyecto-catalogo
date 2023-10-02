// Bloque 1: Información de las cards para Campeche
const cardsDataCampeche = [
    {
      title: "Calakmul",
      imgSrc: "/imgs-zonas/cam-calakmul-za.jpg",
      secondImg: "/imgs-zonas/pattern-cam-calakmul-za.png",
      description: "Calakmul es uno de los sitios arqueológicos más importantes del mundo maya. Fue una ciudad-estado poderosa durante el período Clásico Maya. Se caracteriza por su impresionante sistema de pirámides y estructuras ceremoniales.",
    },
    {
      title: "Edzna",
      imgSrc: "/imgs-zonas/cam-edzna-za.jpg",
      secondImg: "/imgs-zonas/pattern-cam-edzna-za.png",
      description: "Edzná fue una antigua ciudad maya que prosperó durante el período Clásico Tardío. Es conocida por su impresionante sistema de canales y embalses, que ayudaban a controlar el agua en la zona.",
    },
    {
      title: "Hormiguero",
      imgSrc: "/imgs-zonas/cam-hormiguero-za.jpg",
      secondImg: "/imgs-zonas/pattern-cam-hormiguero-za.png",
      description: "Hormiguero es un sitio arqueológico que data del período Clásico Maya. Su nombre se debe a la abundancia de hormigas en la zona. Destacan las estructuras monumentales y una pirámide central.",
    },
    {
      title: "Kankí",
      imgSrc: "/imgs-zonas/cam-kanki-za.jpg",
      secondImg: "/imgs-zonas/pattern-cam-kanki-za.png",
      description: "Kankí es un sitio arqueológico que pertenece al período Clásico Tardío de la civilización maya. Aunque es un sitio relativamente pequeño, contiene una serie de estructuras y plazas que muestran la habilidad arquitectónica de los antiguos mayas.",
    },
    {
      title: "Xpuhil",
      imgSrc: "/imgs-zonas/cam-xpuhil-za.jpg",
      secondImg: "/imgs-zonas/pattern-cam-xpuhil-za.png",
      description: "Xpuhil es otro importante sitio arqueológico de la cultura maya. Contiene diversas estructuras, incluyendo una pirámide y una serie de edificios bien preservados. Xpuhil es conocida por su arquitectura distintiva y detalles decorativos en las fachadas de los edificios.",
    }
  ];

// Bloque 2: Información de las cards para Quintana Roo
const cardsDataQuintanaRoo = [
  {
    title: "Cobá",
    imgSrc: "/imgs-zonas/qr-coba-za.jpg",
    secondImg: "/imgs-zonas/pattern-qr-coba-za.png",
    description: "Cobá fue una antigua ciudad maya que floreció durante el período Clásico. Es conocida por su red de sacbés (antiguos caminos) que conectan las diversas estructuras de la ciudad.",
  },
  {
    title: "El Meco",
    imgSrc: "/imgs-zonas/qr-elmeco-za.jpg",
    secondImg: "/imgs-zonas/pattern-qr-elmeco-za.png",
    description: "El Meco es un sitio arqueológico de tamaño moderado con una gran pirámide central y otras estructuras. Es conocido por su ubicación junto al mar y las vistas panorámicas que ofrece desde su pirámide.",
  },
  {
    title: "San Miguelito",
    imgSrc: "/imgs-zonas/qr-sanmiguelito-za.jpg",
    secondImg: "/imgs-zonas/pattern-qr-sanmiguelito-za.png",
    description: "San Miguelito es un pequeño sitio arqueológico maya ubicado en el corazón de la zona hotelera de Cancún. Contiene una serie de estructuras y patios. Aunque es más pequeño que otros sitios, ofrece una visión de la cultura maya en un contexto urbano.",
  },
  {
    title: "Tulum",
    imgSrc: "/imgs-zonas/qr-tulum-za.jpg",
    secondImg: "/imgs-zonas/pattern-qr-tulum-za.png",
    description: "Tulum es una antigua ciudad amurallada de la civilización maya que floreció durante el período Posclásico. Su nombre significa 'muralla' o 'ciudad amurallada' en maya. Es conocida por su impresionante ubicación junto al mar, lo que la convierte en una de las zonas arqueológicas más fotografiadas del mundo.",
  },
  {
    title: "Xcaret",
    imgSrc: "/imgs-zonas/qr-xcaret-za.jpg",
    secondImg: "/imgs-zonas/pattern-qr-xcaret-za.png",
    description: "Aunque Xcaret no es una zona arqueológica tradicional, es un parque eco-arqueológico que preserva la historia y cultura maya. Ofrece una combinación de áreas naturales y atracciones culturales.",
  }
];

// Bloque 3: Información de las cards para Yucatán
const cardsDataYucatan = [
  {
    title: "Aké",
    imgSrc: "/imgs-zonas/yuc-ake-za.jpg",
    secondImg: "/imgs-zonas/pattern-yuc-ake-za.png",
    description: "Aké es un sitio arqueológico maya ubicado en la región de los Petenes, en el norte de la península de Yucatán. Destaca por su impresionante pirámide conocida como la Pirámide de Aké",
  },
  {
    title: "Chichén Itzá",
    imgSrc: "/imgs-zonas/yuc-chichen-za.jpg",
    secondImg: "/imgs-zonas/pattern-yuc-chichen-za.png",
    description: "Chichén Itzá es uno de los sitios arqueológicos más famosos y visitados de México y del mundo. Fue una ciudad importante de la civilización maya y es conocida por la pirámide de Kukulcán (también conocida como El Castillo), que es una de las Nuevas Maravillas del Mundo.",
  },
  {
  title: "Ek Balam",
    imgSrc: "/imgs-zonas/yuc-ekbalam-za.jpg",
    secondImg: "/imgs-zonas/pattern-yuc-ekbalam-za.png",
    description: "Ek Balam es un sitio arqueológico que fue una ciudad maya durante el período Clásico Tardío. Es conocido por la impresionante Acrópolis, que incluye la pirámide de Ek Balam con una tumba real bien conservada.",
  },
  {
    title: "Mayapán",
    imgSrc: "/imgs-zonas/yuc-mayapan-za.jpg",
    secondImg: "/imgs-zonas/pattern-yuc-mayapan-za.png",
    description: "Mayapán fue una ciudad amurallada importante de la civilización maya durante el período Posclásico. Es conocida por su estilo arquitectónico característico y por su Templo Redondo, único en su tipo en la región.",
  },
  {
    title: "Sayil",
    imgSrc: "/imgs-zonas/yuc-sayil-za.jpg",
    secondImg: "/imgs-zonas/pattern-yuc-sayil-za.png",
    description: "Sayil fue una ciudad maya que formó parte de la liga de ciudades conocidas como la Liga de Mayapán. Destaca por su estructura más famosa, el Palacio, que es una serie de estructuras alargadas que se extienden a lo largo de una colina.",
  },
  {
    title: "Uxmal",
    imgSrc: "/imgs-zonas/yuc-uxmal-za.jpg",
    secondImg: "/imgs-zonas/pattern-yuc-uxmal-za.png",
    description: "Uxmal es otro de los sitios arqueológicos más importantes y mejor conservados de la región. Es conocido por su arquitectura elaborada y sus decoraciones detalladas. Destaca la Pirámide del Adivino y el Cuadrángulo de las Monjas.",
  }
];

// Bloque 4: Código común para crear las cards
const campCardsContainer = document.getElementById('camp-cards-container');
const qrCardsContainer = document.getElementById('qr-cards-container');
const yucCardsContainer = document.getElementById('yuc-cards-container');

// Iterar sobre el JSON y crear las cards
if (campCardsContainer) {
  cardsDataCampeche.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('col');
  
    cardElement.innerHTML = `
      <div class="card h-100">
        <img src="${card.imgSrc}" class="card-img-top img-fluid h-100" alt="...">
        <img src="${card.secondImg}"class="position-absolute img-fluid w-25">
        <div class="card-front">
          <div class="card-body bg-custom">
            <h5 class="card-title text-white">${card.title}</h5>
            <p class="card-text text-white">${card.description}</p>
          </div>
        </div>
      </div>
    `;
  
    campCardsContainer.appendChild(cardElement);
  });
}

if (qrCardsContainer) {
  cardsDataQuintanaRoo.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('col');
  
    cardElement.innerHTML = `
      <div class="card h-100">
        <img src="${card.imgSrc}" class="card-img-top img-fluid h-100" alt="...">
        <img src="${card.secondImg}"class="position-absolute img-fluid w-25">
        <div class="card-front">
          <div class="card-body bg-custom">
            <h5 class="card-title text-white">${card.title}</h5>
            <p class="card-text text-white">${card.description}</p>
          </div>
        </div>
      </div>
    `;
  
    qrCardsContainer.appendChild(cardElement);
  });
}

if (yucCardsContainer) {
  cardsDataYucatan.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('col');
  
    cardElement.innerHTML = `
      <div class="card h-100">
        <img src="${card.imgSrc}" class="card-img-top img-fluid h-100" alt="...">
        <img src="${card.secondImg}"class="position-absolute img-fluid w-25">
        <div class="card-front">
          <div class="card-body bg-custom">
            <h5 class="card-title text-white">${card.title}</h5>
            <p class="card-text text-white">${card.description}</p>
          </div>
        </div>
      </div>
    `;
  
    yucCardsContainer.appendChild(cardElement);
  });
}