// Obtener todos los elementos de diapositivas
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Función para mostrar la siguiente diapositiva
function showNextSlide() {
  // Ocultar la diapositiva actual
  slides[currentSlide].style.display = 'none';
  // Avanzar al siguiente slide
  currentSlide = (currentSlide + 1) % slides.length;
  // Mostrar el siguiente slide
  slides[currentSlide].style.display = 'block';
}

// Mostrar la primera diapositiva al cargar la página
showNextSlide();

// Configurar un temporizador para cambiar las diapositivas automáticamente cada 3 segundos
setInterval(showNextSlide, 3000);
