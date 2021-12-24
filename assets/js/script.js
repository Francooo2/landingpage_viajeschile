// Esta porción de código cambia el color de fondo de la barra de navegación al hacer scroll en el sitio 
let nav = document.getElementById('principalnav')

window.onscroll = function() {
  if (window.pageYOffset > 100) {
    nav.classList.add('move_scroll')
  } else {
    nav.classList.remove('move_scroll')
  }
}

// Tooltip botón formulario
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})