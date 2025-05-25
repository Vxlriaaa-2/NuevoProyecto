// Add Google Fonts dynamically (si ya lo haces en CSS, puedes quitarlo de aquí)
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@400;600&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const vehicleContainer = document.getElementById('vehicleContainer');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const dotsContainer = document.querySelector('.carousel-dots');
const carousel = document.querySelector('.carousel');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

    // Datos de los vehículos
    const vehicles = [
        {
            id: 1,
            name: "Montero Sport",
            price: "Desde $968,600 M.N.",
            year: "2024",
            transmission: "Automática",
            fuel: "Gasolina",
            description: "Mitsubishi Montero Sport tiene un diseño elegante y rendimiento de todoterreno. Con lujo interior, capacidades robustas y seguridad avanzada, te lleva con estilo a cualquier destino aventurero.",
            image: "images/diamond.png",
            whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20Montero%20Sport"
        },
        {
            id: 2,
            name: "Mirage G4",
            price: "Desde $291,600 M.N.",
            year: "2024",
            transmission: "Manual",
            fuel: "Gasolina",
            description: "Mitsubishi Mirage G4 combina estilo moderno con eficiencia excepcional. Tecnología avanzada, diseño aerodinámico y comodidad se fusionan en este sedán urbano de alto rendimiento.",
            image: "images/mirageg4.png",
            whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20MirageG4%202024"
        },
        {
            id: 3,
            name: "Xpander",
            price: "Desde $428,600 M.N.",
            year: "2025",
            transmission: "Automática",
            fuel: "Gasolina",
            description: "Mitsubishi Xpander redefine la versatilidad familiar. Con su diseño espacioso y moderno, tecnología y eficiencia, brinda comodidad y estilo en cada viaje.",
            image: "images/Xpander2025.png",
            whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20Xpander%202025"
        },
        {
            id: 4,
            name: "Outlander PHEV",
            price: "Desde $879,900 M.N.",
            year: "2024",
            transmission: "PHEV Automática",
            fuel: "Gasolina/Eléctrico (Híbrido Enchufable)",
            description: "Potencia y ahorro unidos para un máximo desempeño. Conducción Eléctrica / Híbrida. Dos motores eléctricos y un motor de combustión. ",
            image: "images/homepage-outlander.png",
            whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20OutlanderPHEV%202024"
        },
        {
            id: 5,
            name: "Outlander Sport",
            price: "Desde $462,300 M.N.",
            year: "2025",
            transmission: "Automática",
            fuel: "Gasolina",
            description: "La libertad en su máxima expresión. Diseño de última generación. El desempeño más confiable. ",
            image: "images/outlander-sport-primary1.png",
            whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20Outlander%20Sport"
        },
      
        {
            id: 6,
            name: "L200",
            price: "Desde $573,100 M.N.",
            year: "2025",
            transmission: "Manual",
            fuel: "Gasolina",
            description: "Ofrece versatilidad y comodidad por dentro y por fuera. Abre el camino hacia la aventura.",
            image: "images/l200-primary.png",
            whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20L200%202025."
        },
        {
            id: 7,
            name: "Outlander PHEV",
            price: "Desde $827,900 M.N.",
            year: "2025",
            transmission: "PHEV Automática",
            fuel: "Gasolina/Eléctrico (Híbrido Enchufable)",
            description: "Potencia y ahorro unidos para un máximo desempeño. Conducción Eléctrica / Híbrida. Dos motores eléctricos y un motor de combustión.",
            image: "images/se-plus-m.png",
            whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20OutlanderPHEV%202025."
        },
        {
            id: 8,
            name: "L200 GSR",
            price: "Desde $852,400 M.N.",
            year: "2025",
            transmission: "Manual",
            fuel: "Gasolina",
            description: "Mitsubishi L200 GSR 2025 es la pick-up todoterreno definitiva. Con resistencia probada y tecnología avanzada, ofrece potencia y versatilidad para dominar cualquier camino o desafío.",
            image: "images/gsr-at-4x4-dsl-l200.png",
            whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20L200%20GSR."
        },
        {
            id: 9,
            name: "Mirage G4",
            price: "Desde $294,400 M.N.",
            year: "2025",
            transmission: "Manual",
            fuel: "Gasolina",
            description: "Mitsubishi Mirage G4 combina estilo moderno con eficiencia excepcional. Tecnología avanzada, diseño aerodinámico y comodidad se fusionan en este sedán urbano de alto rendimiento.",
            image: "images/mirageg4.png",
            whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20MirageG4%202025."
        },
    ];

  
let currentIndex = 0;
let itemsPerSlide = 3; // Valor inicial, se ajustará con el resize
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let cardWidth = 0;
const GAP = 20; // El mismo valor que en CSS

// --- Funciones del Carrusel ---

function setCarouselWidth() {
    // Determinar itemsPerSlide basado en el ancho de la ventana
    if (window.innerWidth <= 768) {
        itemsPerSlide = 1;
    } else if (window.innerWidth <= 992) {
        itemsPerSlide = 2;
    } else {
        itemsPerSlide = 3;
    }

    // Calcula el ancho de la tarjeta dinámicamente
    // carousel.clientWidth es el ancho visible del carrusel
    cardWidth = (carousel.clientWidth - (itemsPerSlide - 1) * GAP) / itemsPerSlide;

    // Aplica el ancho calculado a todas las tarjetas
    document.querySelectorAll('.vehicle-card').forEach(card => {
        card.style.width = `${cardWidth}px`;
    });

    // Asegúrate de que el índice no se salga de los límites
    if (currentIndex > vehicles.length - itemsPerSlide) {
        currentIndex = vehicles.length - itemsPerSlide;
        if (currentIndex < 0) currentIndex = 0; // Evita índices negativos si hay pocos vehículos
    }
    setPositionByIndex();
    updateDots();
}

function renderVehicles() {
    vehicleContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar
    vehicles.forEach(vehicle => {
        const vehicleCard = document.createElement('div');
        vehicleCard.classList.add('vehicle-card');
        vehicleCard.setAttribute('data-id', vehicle.id); // Para identificar el vehículo

        vehicleCard.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.name}">
            <h3>${vehicle.name}</h3>
            <p class="price">${vehicle.price}</p>
            <div class="specs">
                <p><strong>Año:</strong> ${vehicle.year}</p>
                <p><strong>Transmisión:</strong> ${vehicle.transmission}</p>
                <p><strong>Combustible:</strong> ${vehicle.fuel}</p>
            </div>
            <p>${vehicle.description}</p>
            <a href="${vehicle.whatsapp}" class="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-whatsapp"></i> Mas información     
            </a>
        `;
        vehicleContainer.appendChild(vehicleCard);
    });
    setCarouselWidth(); // Ajustar el ancho de las tarjetas después de renderizar
}

function setPositionByIndex() {
    // Calcula la nueva posición de traducción
    // (cardWidth + GAP) es el ancho total que ocupa una tarjeta más su espacio
    currentTranslate = -currentIndex * (cardWidth + GAP);
    setSliderTransform();
}

function setSliderTransform() {
    vehicleContainer.style.transform = `translateX(${currentTranslate}px)`;
}

function moveCarousel(direction) {
    if (direction === 'next') {
        if (currentIndex < vehicles.length - itemsPerSlide) {
            currentIndex++;
        } else {
            // Opcional: volver al inicio o detenerse
            currentIndex = 0; // Vuelve al inicio
        }
    } else { // direction === 'prev'
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Opcional: ir al final o detenerse
            currentIndex = vehicles.length - itemsPerSlide; // Va al final
            if (currentIndex < 0) currentIndex = 0; // Evita índices negativos
        }
    }
    setPositionByIndex();
    updateDots();
}

// --- Puntos del Carrusel (Dots) ---
function createDots() {
    dotsContainer.innerHTML = '';
    const numDots = Math.ceil(vehicles.length / itemsPerSlide); // Número de grupos de vehículos
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', () => {
            currentIndex = i * itemsPerSlide;
            // Asegura que currentIndex no exceda el límite máximo
            if (currentIndex > vehicles.length - itemsPerSlide) {
                currentIndex = vehicles.length - itemsPerSlide;
            }
            if (currentIndex < 0) currentIndex = 0; // Evita negativos
            setPositionByIndex();
            updateDots();
        });
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        // Un dot está activo si el currentIndex cae dentro del "grupo" que representa
        const dotIndex = parseInt(dot.getAttribute('data-index'));
        const startOfGroup = dotIndex * itemsPerSlide;
        const endOfGroup = startOfGroup + itemsPerSlide - 1;

        if (currentIndex >= startOfGroup && currentIndex <= endOfGroup) {
             dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
        // Pequeño ajuste para el último dot si el número de vehículos no es múltiplo
        if (currentIndex === vehicles.length - itemsPerSlide && dotIndex === Math.floor((vehicles.length - 1) / itemsPerSlide)) {
             dot.classList.add('active');
        }
    });
}


// --- Eventos del Carrusel (Swipe en Móvil) ---
function touchStart(event) {
    isDragging = true;
    startPos = event.touches[0].clientX;
    prevTranslate = currentTranslate;
    // Detener la animación para que el arrastre sea suave
    cancelAnimationFrame(animationID);
    vehicleContainer.style.transition = 'none'; // Quitar transición CSS durante el arrastre
}

function touchMove(event) {
    if (!isDragging) return;
    const currentTouchPos = event.touches[0].clientX;
    const delta = currentTouchPos - startPos;
    currentTranslate = prevTranslate + delta;

    // Limitar el arrastre para que no se desplace demasiado
    const maxTranslate = 0;
    const minTranslate = -(vehicles.length * (cardWidth + GAP) - carousel.clientWidth);

    if (currentTranslate > maxTranslate) {
        currentTranslate = maxTranslate;
    } else if (currentTranslate < minTranslate) {
        currentTranslate = minTranslate;
    }

    setSliderTransform();
}

function touchEnd() {
    if (!isDragging) return;
    isDragging = false;
    vehicleContainer.style.transition = 'transform 0.3s ease-out'; // Volver a añadir transición

    const movedBy = currentTranslate - prevTranslate;

    // Determinar si avanzó o retrocedió lo suficiente para cambiar de slide
    if (movedBy < -cardWidth / 4 && currentIndex < vehicles.length - itemsPerSlide) {
        currentIndex++;
    } else if (movedBy > cardWidth / 4 && currentIndex > 0) {
        currentIndex--;
    }
    
    // Ajustar el currentIndex para el último grupo de tarjetas
    if (currentIndex > vehicles.length - itemsPerSlide) {
        currentIndex = vehicles.length - itemsPerSlide;
        if (currentIndex < 0) currentIndex = 0; // Asegura que no sea negativo
    }
    
    setPositionByIndex(); // Ajustar a la posición final de la tarjeta
    updateDots(); // Actualizar los puntos
}


// --- Inicialización y Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    renderVehicles(); // Renderiza los vehículos al cargar la página
    createDots(); // Crea los puntos
    updateDots(); // Actualiza el estado de los puntos

    // Botones de navegación del carrusel
    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));

    // Eventos para el arrastre (swipe) en dispositivos táctiles
    vehicleContainer.addEventListener('touchstart', touchStart);
    vehicleContainer.addEventListener('touchmove', touchMove);
    vehicleContainer.addEventListener('touchend', touchEnd);
    
    // Evento de resize para ajustar el carrusel a diferentes tamaños de pantalla
    window.addEventListener('resize', () => {
        // Pequeño debounce para el resize para evitar recálculos excesivos
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(() => {
            setCarouselWidth();
            createDots(); // Volver a crear los dots por si cambia itemsPerSlide
            updateDots();
        }, 250);
    });

    // Menú de navegación móvil
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Cerrar el menú al hacer clic en un enlace (solo en móvil)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});