document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-category ul li a');
    const projectImages = document.querySelectorAll('.project-image');

    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const imageId = this.getAttribute('data-image');
            projectImages.forEach(img => {
                if (img.id === imageId) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        });

        link.addEventListener('mouseleave', function() {
            projectImages.forEach(img => {
                img.classList.remove('active');
            });
            document.getElementById('image1').classList.add('active');
        });
    });

    // 默认显示第一个项目的图片
    projectImages.forEach(img => {
        if (img.id === 'image1') {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
});
