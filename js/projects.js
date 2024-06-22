
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

    // 图片放大效果
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];
    const images = document.querySelectorAll('.project-image');
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalImg.style.transform = 'scale(1)'; // 重置缩放
            currentIndex = index;
            document.body.style.overflow = 'hidden'; // 禁止背景滚动
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复背景滚动
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // 恢复背景滚动
        }
    });

    // 切换图片
    window.changeImage = function(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        modalImg.style.transform = 'scale(0.8)'; // 缩小图片
        setTimeout(() => {
            modalImg.src = images[currentIndex].src;
            modalImg.style.transform = 'scale(1)'; // 放大图片
        }, 300); // 与过渡时间匹配
    };
});
