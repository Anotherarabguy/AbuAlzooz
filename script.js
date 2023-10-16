const body = document.querySelector('body');
const maxTilt = 10;


const paragraphs = document.querySelectorAll('.scroll-paragraph');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
});

paragraphs.forEach(paragraph => {
    observer.observe(paragraph);
});

const iframes = document.querySelectorAll('.portfolio-container iframe');

  // Add event listeners for hover
  iframes.forEach((iframe) => {
    iframe.addEventListener('mouseenter', () => {
      iframe.classList.add('hovered');
    });

    iframe.addEventListener('mouseleave', () => {
      iframe.classList.remove('hovered');
    });
  });
  const gridContainer = document.querySelector('.grid-container');

// Create grid elements
for (let i = 0; i < 100; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

// Randomly change the color and size of grid elements
function animateGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        const randomScale = 0.5 + Math.random() * 2;
        item.style.backgroundColor = randomColor;
        item.style.transform = `scale(${randomScale})`;
    });

    requestAnimationFrame(animateGrid);
}

animateGrid();
