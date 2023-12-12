const layers = document.querySelectorAll('.layer');

window.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;

    const mouseX = e.clientX - container.getBoundingClientRect().left;
    const mouseY = e.clientY - container.getBoundingClientRect().top;

    const sensitivity = 0.03;

    const moveX = (mouseX - centerX) * sensitivity;
    const moveY = (mouseY - centerY) * sensitivity;

    layers.forEach((layer, index) => {
        layer.style.transform = `translate(${moveX * (index + 1)}px, ${moveY * (index + 1)}px)`;
    });
});
