document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-category ul li a');
    const projectImages = document.querySelectorAll('.project-image');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    function showImage(index) {
        projectImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    projectLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', function() {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectImages.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < projectImages.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    // 默认显示第一个项目的图片
    showImage(currentIndex);
});
