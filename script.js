// Número total de imágenes
const totalImages = 30; // Total de imágenes

// Contenedor de imágenes
const imageContainer = document.getElementById('image-container');

// Array de rutas de imágenes
const imageURLs = [
  '322/img/imagen1.png',
  '322/img/imagen2.png',
  '322/img/imagen3.png',
  '322/img/imagen4.png',
  '322/img/imagen5.png',
  '322/img/imagen6.png',
  '322/img/imagen7.png',
  '322/img/imagen8.png',
  '322/img/imagen9.png',
  '322/img/imagen10.png',
  '322/img/imagen11.png',
  '322/img/imagen12.png',
  '322/img/imagen13.png',
  '322/img/imagen14.png',
  '322/img/imagen15.png',
  '322/img/imagen16.png',
  '322/img/imagen17.png',
  '322/img/imagen18.png',
  '322/img/imagen19.png',
  '322/img/imagen20.png',
  '322/img/imagen21.png',
  '322/img/imagen22.png',
  '322/img/imagen23.png',
  '322/img/imagen24.png',
  '322/img/imagen25.png',
  '322/img/imagen26.png',
  '322/img/imagen27.png',
  '322/img/imagen28.png',
  '322/img/imagen29.png',
  '322/img/imagen30.png'
];

// Array de enlaces fijos relacionados con cada imagen
const imageLinks = [
  '322/pdf/Querida.pdf',
  '322/pdf/Madera.pdf',
  'https://www.youtube.com/watch?v=bp_o07ND3Qk&t=62s',
  'https://www.youtube.com/watch?v=yXhI8-5cL_s',
  'https://www.youtube.com/watch?v=ukT3V-PQWjI',
  'https://www.youtube.com/watch?v=zLy2KBjyq3E',
  '322/pdf/PARTE_DE_TI.pdf',
  'https://www.youtube.com/watch?v=NdDUQ4v-3h4',
  'https://www.youtube.com/watch?v=8H1iy5IR-2I',
  '322/pdf/Whisky.pdf',
  'https://www.youtube.com/watch?v=BNZvVkS1ZY4',
  '322/pdf/Amaras.pdf',
  'https://www.youtube.com/watch?v=tGu1LM7gX4Y',
  'https://www.youtube.com/watch?v=0_JLszFlD90',
  'https://www.youtube.com/watch?v=2b-V-nJFy_M',
  '322/pdf/MISMO.pdf',
  'https://www.youtube.com/watch?v=2zOGc6UcIUs',
  'https://www.youtube.com/watch?v=pbhs9gFLp1Q',
  'https://www.youtube.com/watch?v=PUpgyoNCzVc',
  'https://www.youtube.com/watch?v=mPkBG-o8Em4',
  'https://www.youtube.com/watch?v=bgt4ZR7WVf8',
  'https://www.youtube.com/watch?v=0JTN5tLGS1A',
  'https://www.youtube.com/watch?v=hK-vZhJuDY4',
  'https://www.youtube.com/watch?v=RaNr43IjFqU',
  'https://www.youtube.com/watch?v=34xtgJWqGmE',
  'https://www.youtube.com/watch?v=pFaqvHu__RI',
  'https://www.youtube.com/watch?v=v9VYEjeuB0w',
  'https://www.youtube.com/watch?v=URgYQ8KmaVg',
  'https://www.youtube.com/watch?v=a2x7AV3NBfI'
];

// Crear y posicionar dinámicamente las imágenes
for (let i = 0; i < totalImages; i++) {
  // Crear elemento <img>
  const img = document.createElement('img');
  img.src = imageURLs[i]; // Asignar la ruta de la imagen desde el array
  img.alt = `Imagen ${i + 1}`;
  img.className = `image image-${i + 1}`; // Asignar clases dinámicamente
  img.setAttribute('data-link', imageLinks[i]); // Asignar el enlace fijo de cada imagen
  imageContainer.appendChild(img);
}

// Seleccionar todas las imágenes generadas
const images = document.querySelectorAll('.image');

// Función para mover las imágenes aleatoriamente
function moveImages() {
  images.forEach(image => {
    const x = Math.random() * window.innerWidth; // Coordenada aleatoria en X
    const y = Math.random() * window.innerHeight; // Coordenada aleatoria en Y

    // Posicionar la imagen
    image.style.top = `${y}px`;
    image.style.left = `${x}px`;
  });
}

// Mover las imágenes automáticamente cada segundo
setInterval(moveImages, 1000);

// Mover las imágenes al cargar la página
moveImages();

// Agregar evento de clic a cada imagen para abrir el enlace correspondiente
images.forEach(image => {
  image.style.position = 'absolute'; // Hacer que las imágenes sean posicionables
  image.addEventListener('click', () => {
    const link = image.getAttribute('data-link'); // Obtener el enlace
    window.open(link, '_blank'); // Abrir el enlace en una nueva pestaña
  });
});

// Controles personalizados del reproductor de audio
const audio = document.getElementById('audio');
const backwardButton = document.getElementById('backward');
const forwardButton = document.getElementById('forward');

// Retroceder 10 segundos
backwardButton.addEventListener('click', () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
});

// Adelantar 10 segundos
forwardButton.addEventListener('click', () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});
