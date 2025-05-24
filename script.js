document.addEventListener('DOMContentLoaded', () => {
    // Datos de los vehículos (asegúrate de que esta variable esté definida o cárgala de una API/JSON)
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
                price: "Desde $819,900 M.N.",
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
                price: "Desde $538,800 M.N.",
                year: "2024",
                transmission: "Manual",
                fuel: "Gasolina",
                description: "Mitsubishi L200 es la pick-up todoterreno definitiva. Con resistencia probada y tecnología avanzada, ofrece potencia y versatilidad para dominar cualquier camino o desafío.",
                image: "images/l200.png",
                whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20L200%202024."
            },
            {
                id: 7,
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
                id: 8,
                name: "Outlander PHEV",
                price: "Desde $827,900 M.N.",
                year: "2025",
                transmission: "PHEV Automática",
                fuel: "Gasolina/Eléctrico (Híbrido Enchufable)",
                description: "Potencia y ahorro unidos para un máximo desempeño. Conducción Eléctrica / Híbrida. Dos motores eléctricos y un motor de combustión.",
                image: "images/se-plus-M.png",
                whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20OutlanderPHEV%202025."
            },
            {
                id: 9,
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
                id: 10,
                name: "Mirage G4",
                price: "Desde $294,400 M.N.",
                year: "2025",
                transmission: "Manual",
                fuel: "Gasolina",
                description: "Mitsubishi Mirage G4 combina estilo moderno con eficiencia excepcional. Tecnología avanzada, diseño aerodinámico y comodidad se fusionan en este sedán urbano de alto rendimiento.",
                image: "images/mirageg4.png",
                whatsapp: "https://wa.me/+524924933151?text=Hola%20Gerardo,%20estoy%20interesado%20en%20el%20MirageG4%202025."
            },
            // ... (tus datos de vehículos permanecen iguales)
        ];
    
        const vehicleContainer = document.getElementById('vehicleContainer');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const carouselContainer = document.querySelector('.carousel-container');

    let currentVisibleIndex = 0; // Índice de la primera tarjeta visible (0-based)

    // --- Funciones del Carrusel ---

    /**
     * Carga dinámicamente las tarjetas de vehículos en el DOM.
     */
    function loadVehicles() {
        if (!vehicleContainer) {
            console.error('Error: El elemento #vehicleContainer no fue encontrado.');
            return;
        }
        vehicleContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir nuevos elementos

        vehicles.forEach(vehicle => {
            const vehicleCard = document.createElement('div');
            vehicleCard.className = 'vehicle-card';

            vehicleCard.innerHTML = `
                <div class="vehicle-image">
                    <img src="${vehicle.image}" alt="${vehicle.name}">
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
                    <a href="${vehicle.whatsapp}" class="btn info-button" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-whatsapp"></i> Más información
                    </a>
                </div>
            `;
            
            vehicleContainer.appendChild(vehicleCard);
        });
        initCarousel(); // Inicializar el carrusel una vez que los vehículos están cargados
    }

    /**
     * Actualiza los puntos de navegación del carrusel.
     * Un punto se marca como 'activo' si su tarjeta correspondiente es la actualmente visible.
     */
    function updateDots() {
        if (!dotsContainer || !carouselContainer || !vehicleContainer) return;

        dotsContainer.innerHTML = ''; // Limpiar los puntos existentes
        const totalCards = vehicles.length;
        const cards = vehicleContainer.children;

        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (i === currentVisibleIndex) {
                dot.classList.add('active');
            }
            dot.dataset.index = i; // Almacena el índice de la tarjeta para usarlo en el click
            dot.addEventListener('click', () => {
                const cardToGo = cards[i];
                if (cardToGo) {
                    // Desplaza el contenedor a la posición de la tarjeta, intentando centrarla
                    carouselContainer.scrollTo({
                        left: cardToGo.offsetLeft - (carouselContainer.offsetWidth / 2) + (cardToGo.offsetWidth / 2),
                        behavior: 'smooth'
                    });
                    currentVisibleIndex = i; // Actualiza el índice visible al hacer clic en un punto
                    updateDots(); // Refresca la apariencia de los puntos
                }
            });
            dotsContainer.appendChild(dot);
        }
    }

    /**
     * Determina y actualiza el índice de la tarjeta que está más visible en el carrusel.
     * Se usa cuando el usuario hace scroll manual.
     */
    function updateCurrentVisibleIndex() {
        if (!carouselContainer || !vehicleContainer) return;

        const scrollLeft = carouselContainer.scrollLeft;
        const cards = vehicleContainer.children;
        if (cards.length === 0) return;

        let closestIndex = 0;
        let minDiff = Infinity;

        // Itera sobre las tarjetas para encontrar cuál está más cerca del centro del viewport
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const viewportCenter = scrollLeft + carouselContainer.offsetWidth / 2;
            const diff = Math.abs(viewportCenter - cardCenter);

            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = i;
            }
        }
        
        // Solo actualiza si el índice ha cambiado para evitar re-renders innecesarios de los dots
        if (closestIndex !== currentVisibleIndex) {
            currentVisibleIndex = closestIndex;
            updateDots();
        }
    }

    // --- Navegación del Carrusel con Botones ---

    prevButton.addEventListener('click', () => {
        if (!carouselContainer || !vehicleContainer) return;
        const cards = vehicleContainer.children;
        if (cards.length === 0) return;

        // Calcula el índice de la tarjeta anterior
        const targetIndex = Math.max(0, currentVisibleIndex - 1);
        const targetCard = cards[targetIndex];

        if (targetCard) {
            // Desplaza el contenedor a la posición de la tarjeta objetivo, intentando centrarla
            carouselContainer.scrollTo({
                left: targetCard.offsetLeft - (carouselContainer.offsetWidth / 2) + (targetCard.offsetWidth / 2),
                behavior: 'smooth'
            });
            currentVisibleIndex = targetIndex; // Actualiza el índice visible inmediatamente
            updateDots(); // Refresca la apariencia de los puntos
        }
    });

    nextButton.addEventListener('click', () => {
        if (!carouselContainer || !vehicleContainer) return;
        const cards = vehicleContainer.children;
        if (cards.length === 0) return;
        
        // Calcula el índice de la tarjeta siguiente
        const targetIndex = Math.min(cards.length - 1, currentVisibleIndex + 1);
        const targetCard = cards[targetIndex];

        if (targetCard) {
            // Desplaza el contenedor a la posición de la tarjeta objetivo, intentando centrarla
            carouselContainer.scrollTo({
                left: targetCard.offsetLeft - (carouselContainer.offsetWidth / 2) + (targetCard.offsetWidth / 2),
                behavior: 'smooth'
            });
            currentVisibleIndex = targetIndex; // Actualiza el índice visible inmediatamente
            updateDots(); // Refresca la apariencia de los puntos
        }
    });

    // Escuchar el evento de scroll en el contenedor del carrusel para actualizar los dots
    // Se usa un debounce para evitar actualizaciones excesivas durante el scroll
    let scrollTimeout;
    carouselContainer.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateCurrentVisibleIndex();
        }, 150); // Ajusta este valor si necesitas una respuesta más rápida o más lenta
    });


    /**
     * Inicializa el carrusel al cargar los vehículos.
     */
    function initCarousel() {
        // Asegura que el carrusel esté en la primera posición al inicio
        carouselContainer.scrollTo({
            left: 0,
            behavior: 'auto' // 'auto' para un scroll instantáneo al cargar
        });
        updateCurrentVisibleIndex(); // Determina la primera tarjeta visible y actualiza los dots
    }

    // --- Lógica de Redimensionamiento de Ventana ---
    window.addEventListener('resize', () => {
        // Al redimensionar, recalcula la tarjeta visible y actualiza los dots
        updateCurrentVisibleIndex();
        // Vuelve a generar los dots si la lógica de paginación cambia (no es el caso aquí, pero buena práctica)
        updateDots(); 
    });

    // --- Ejecución Inicial ---
    loadVehicles(); // Inicia cargando los vehículos en el DOM

    // --- Lógica del Scroll Suave para Enlaces de Navegación (Header y "Ver modelos") ---
    // Selecciona todos los enlaces que apuntan a una sección (usan #)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Excluye enlaces de WhatsApp o cualquier botón que tenga un comportamiento diferente
        if (!anchor.classList.contains('btn-whatsapp') && !anchor.classList.contains('info-button')) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // Previene el comportamiento por defecto del navegador

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth' // Desplazamiento suave a la sección
                    });

                    // Cierra el menú móvil si está abierto (para una mejor UX)
                    const navUl = document.querySelector('nav ul');
                    if (navUl && navUl.classList.contains('active')) {
                        navUl.classList.remove('active');
                    }
                }
            });
        }
    });

    // --- Lógica del Sticky Header ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Si el scroll es mayor a 50px, añade la clase
                header.classList.add('header-scrolled');
            } else { // De lo contrario, quita la clase
                header.classList.remove('header-scrolled');
            }
        });
    }

    // --- Lógica del Menú Móvil (Toggle) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
        });
        // Si el menú se cierra por un enlace, asegúrate de quitar la clase 'active'
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                }
            });
        });
    }

    // --- Actualización Automática del Año en el Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});