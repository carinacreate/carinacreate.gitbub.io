document.addEventListener('DOMContentLoaded', function() {
    // 处理项目图片切换
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

    // 处理内容显现动画
    const content = document.querySelector('.content');

    function checkVisibility() {
        const rect = content.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            content.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the content is already in view
});
