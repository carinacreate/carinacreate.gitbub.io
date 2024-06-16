document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const projectImages = document.querySelectorAll('.project-image');

    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const id = this.id;
            projectImages.forEach(img => {
                if (img.id === `image-${id}`) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

    // 默认显示第一个项目的图片
    projectImages.forEach(img => {
        if (img.id === 'image-art-works') {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
});

