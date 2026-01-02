import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".header-link").forEach((item) => {
        
        item.addEventListener('mouseover', ev => {
            ev.preventDefault();
            const border = item.querySelector(".bottom-border");
            if (!border) {
                return;
            }
            border.classList.add('active');
        });

        item.addEventListener('mouseout', ev => {
            ev.preventDefault();
            const border = item.querySelector(".bottom-border");
            if (!border) {
                return;
            }
            border.classList.remove('active');
        });
    });
    
    // Add the alt text to the image
    document.querySelectorAll(".article-image").forEach((item) => {
        item.parentElement.querySelector(".img-alt-text").textContent = item.getAttribute("alt");
    });
});

