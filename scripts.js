// Función para generar puntos aleatorios
function createRandomDot() {
    const dot = document.createElement('div');
    dot.className = 'dot';
    const size = Math.random() * 10 + 10; // Tamaño aleatorio entre 1 y 5
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.background = getRandomColor();
    dot.style.position = 'absolute';
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.left = `${Math.random() * 100}vw`;

    return dot;
}

// Función para obtener un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generar y agregar puntos al fondo
const dotsContainer = document.getElementById('dots');
for (let i = 0; i < 100; i++) { // Puedes ajustar la cantidad de puntos
    const dot = createRandomDot();
    dotsContainer.appendChild(dot);
}