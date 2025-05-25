// Add Google Fonts dynamically
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

let currentIndex = 0;
let itemsPerSlide = 3;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let cardWidth = 0;
const GAP = 20;

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

  
function loadVehicles() {
    vehicleContainer.innerHTML = '';

    vehicles.forEach(vehicle => {
        if (!vehicle.image) {
            console.warn(`Vehículo "${vehicle.name}" no tiene una propiedad 'image'. Saltando.`);
            return;
        }

        const vehicleCard = document.createElement('div');
        vehicleCard.className = 'vehicle-card';

        const imageHtml = `<img src="${vehicle.image}" alt="${vehicle.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=Imagen+no+disponible';this.alt='Imagen no disponible';">`;

        vehicleCard.innerHTML = `
            <div class="vehicle-image">
                ${imageHtml}
            </div>
            <div class="vehicle-info">
                <h3>${vehicle.name}</h3>
                <p>${vehicle.description}</p>
                <div class="vehicle-features">
                    <span>${vehicle.year}</span>
                    <span>${vehicle.transmission}</span>
                    <span>${vehicle.fuel}</span>
                </div>
                <div class="vehicle-price">${vehicle.price}</div>
                <a href="${vehicle.whatsapp}" class="btn info-button" target="_blank">
                    <i class="fab fa-whatsapp"></i> Más información
                </a>
            </div>
        `;

        vehicleContainer.appendChild(vehicleCard);
    });

    const firstCard = document.querySelector('.vehicle-card');
    if (firstCard) {
        cardWidth = firstCard.getBoundingClientRect().width;
    } else {
        cardWidth = 320;
    }

    handleResize(); // Call handleResize directly after loading vehicles
    initTouchEvents();
    initDots();
    updateCarousel();
}

function initDots() {
    dotsContainer.innerHTML = '';
    const totalSlides = Math.ceil(vehicles.length / itemsPerSlide);

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function goToSlide(index) {
    const totalSlides = Math.ceil(vehicles.length / itemsPerSlide);

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    updateCarousel();
}

function updateCarousel() {
    const firstCard = document.querySelector('.vehicle-card');
    if (firstCard) {
        cardWidth = firstCard.getBoundingClientRect().width;
    } else {
        return;
    }

    const totalCardAndGapWidth = cardWidth + GAP;
    const offset = -currentIndex * totalCardAndGapWidth * itemsPerSlide;

    carousel.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Use the same smooth transition
    carousel.style.transform = `translateX(${offset}px)`;
    currentTranslate = offset;
    prevTranslate = offset;

    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function initTouchEvents() {
    const carouselOptions = { passive: false };

    carousel.removeEventListener('touchstart', touchStart);
    carousel.removeEventListener('touchmove', touchMove);
    carousel.removeEventListener('touchend', touchEnd);
    carousel.removeEventListener('mousedown', touchStart);
    carousel.removeEventListener('mousemove', touchMove);
    carousel.removeEventListener('mouseup', touchEnd);
    carousel.removeEventListener('mouseleave', touchEnd);

    carousel.addEventListener('touchstart', touchStart, carouselOptions);
    carousel.addEventListener('touchmove', touchMove, carouselOptions);
    carousel.addEventListener('touchend', touchEnd);
    carousel.addEventListener('mousedown', touchStart);
    carousel.addEventListener('mousemove', touchMove);
    carousel.addEventListener('mouseup', touchEnd);
    carousel.addEventListener('mouseleave', touchEnd);
}

function touchStart(e) {
    isDragging = true;
    if (e.type === 'touchstart' || e.type === 'mousedown') {
        e.preventDefault();
    }

    startPos = e.touches ? e.touches[0].clientX : e.clientX;
    carousel.style.transition = 'none';
    animationID = requestAnimationFrame(animation);
}

function touchMove(e) {
    if (isDragging) {
        if (e.cancelable) {
            e.preventDefault();
        }

        const currentPosition = e.touches ? e.touches[0].clientX : e.clientX;
        const diff = currentPosition - startPos;
        currentTranslate = prevTranslate + diff;
    }
}

function touchEnd() {
    if (isDragging) {
        cancelAnimationFrame(animationID);
        isDragging = false;

        const movedBy = currentTranslate - prevTranslate;

        const firstCard = document.querySelector('.vehicle-card');
        if (!firstCard) {
            return;
        }
        cardWidth = firstCard.getBoundingClientRect().width;

        const slideMoveThreshold = (cardWidth + GAP) * 0.3;
        const totalSlides = Math.ceil(vehicles.length / itemsPerSlide);

        if (movedBy < -slideMoveThreshold && currentIndex < totalSlides - 1) {
            currentIndex++;
        } else if (movedBy > slideMoveThreshold && currentIndex > 0) {
            currentIndex--;
        }

        updateCarousel();
    }
}

function animation() {
    carousel.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) {
        animationID = requestAnimationFrame(animation);
    }
}

prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));

function handleResize() {
    const oldItemsPerSlide = itemsPerSlide;
    if (window.innerWidth < 768) {
        itemsPerSlide = 1;
    } else if (window.innerWidth < 1024) {
        itemsPerSlide = 2;
    } else {
        itemsPerSlide = 3;
    }

    if (oldItemsPerSlide !== itemsPerSlide) {
        const totalSlides = Math.ceil(vehicles.length / itemsPerSlide);
        if (currentIndex >= totalSlides) {
            currentIndex = totalSlides - 1;
            if (currentIndex < 0) currentIndex = 0;
        }
    }

    initDots();
    updateCarousel();
}

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 150);
});

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            }
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            }
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadVehicles();
});