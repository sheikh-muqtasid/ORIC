const sliderData = [
    { image_url: 'download.jpeg', title: 'Title 1', description: 'Description 1' },
    { image_url: 'download.jpeg', title: 'Title 2', description: 'Description 2' },
    { image_url: 'download.jpeg', title: 'Title 3', description: 'Description 3' }
];

let currentSlide = 0;

document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.getElementById('slides');
    sliderData.forEach((slide) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');
        slideDiv.innerHTML = `
            <img src="${slide.image_url}" alt="${slide.title}">
            <h3>${slide.title}</h3>
            <p>${slide.description}</p>
        `;
        slidesContainer.appendChild(slideDiv);
    });

    const slides = document.querySelectorAll('.slide');
    document.getElementById('next').addEventListener('click', (event) => {
        event.preventDefault();
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    });

    document.getElementById('prev').addEventListener('click', (event) => {
        event.preventDefault();
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    });

    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
});
