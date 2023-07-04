// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtener todas las secciones y enlaces del menú
    const sections = document.querySelectorAll('.section');
    const menuLinks = document.querySelectorAll('.menu__link');
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Agregar evento de clic a cada enlace del menú
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Obtener el ID de la sección seleccionada
            const targetId = link.getAttribute('href').substring(1);

            // Ocultar todas las secciones y mostrar la sección seleccionada
            sections.forEach(function (section) {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';

            // Cambiar la clase activa en el menú
            menuLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            link.classList.add('active');
        });
    });

    // Agregar evento de clic al menú (en dispositivos móviles)
    menuToggle.addEventListener('click', function () {
        if (menuToggle.checked) {
            // El menú está abierto, ocultarlo al seleccionar un elemento
            menu.addEventListener('click', function () {
                menuToggle.checked = false;
            });
        }
    });
});
// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const menuOffsetTop = menu.offsetTop;

    // Función para verificar el desplazamiento y aplicar la clase 'fixed' al menú
    function checkScroll() {
        if (window.pageYOffset >= menuOffsetTop) {
            menu.classList.add('fixed');
        } else {
            menu.classList.remove('fixed');
        }
    }

    // Agregar evento de scroll para llamar a la función 'checkScroll'
    window.addEventListener('scroll', checkScroll);
});


// ---Animacion de la secciones---

// Código JavaScript para cambiar la visibilidad de las secciones
function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    var secciones = document.getElementsByClassName('section');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    // Mostrar la sección seleccionada
    var seccionSeleccionada = document.getElementById(seccionId);
    seccionSeleccionada.style.display = 'block';
}

// Obtener todos los elementos del acordeón
const accordionItems = document.querySelectorAll('.accordion__item');

// Iterar sobre cada elemento del acordeón
accordionItems.forEach((item) => {
    // Obtener el botón y el contenido de cada elemento del acordeón
    const button = item.querySelector('.accordion__btn');
    const content = item.querySelector('.accordion__content');

    // Agregar un evento de clic al botón
    button.addEventListener('click', () => {
        // Alternar la visibilidad del contenido al hacer clic en el botón
        if (content.style.visibility === 'hidden') {
            content.style.visibility = 'visible';
        } else {
            content.style.visibility = 'hidden';
        }
    });
});

