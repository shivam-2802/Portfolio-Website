const imageContainers = document.querySelectorAll('.image-container');
const imageGallery = document.querySelector('.image-gallery');
const modal = document.querySelector('.fullscreen-modal');
const modalContent = document.querySelector('#full-image');
const closeBtn = document.querySelector('.close-button');

imageContainers.forEach(container => {
    container.addEventListener('click', () => {
        modal.style.display = 'block';
        modalContent.src = container.querySelector('img').src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
