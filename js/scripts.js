document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-category ul li a');
    const projectImages = document.querySelectorAll('.project-image');

    function showImage(imageId) {
        projectImages.forEach(img => {
            img.classList.remove('active');
        });
        document.getElementById(imageId).classList.add('active');
    }

    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const imageId = this.getAttribute('data-image');
            showImage(imageId);
        });
    });

    // 默认显示第一个项目的图片
    showImage('image1');
});
