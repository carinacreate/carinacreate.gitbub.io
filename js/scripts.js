document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-category ul li a');
    const projectImages = document.querySelectorAll('.project-image');

    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const imageId = this.getAttribute('data-image');
            projectImages.forEach(img => {
                if (img.id === imageId) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

    // 默认显示第一个项目的图片
    projectImages.forEach(img => {
        if (img.id === 'image1') {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
});
