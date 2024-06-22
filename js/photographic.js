document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementsByClassName('close')[0];
    const images = document.querySelectorAll('.image-section img');

    // 滚动时调整图片透明度和位置
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top + scrollTop;
            const imgHeight = img.height;

            if (scrollTop + windowHeight > imgTop && scrollTop < imgTop + imgHeight) {
                const visibleHeight = Math.min(windowHeight, imgTop + imgHeight - scrollTop);
                const opacity = visibleHeight / imgHeight;
                const translateY = (1 - opacity) * 50; // 根据透明度计算垂直位移
                img.style.opacity = opacity;
                img.style.transform = `translateY(${translateY}px)`;
            } else {
                img.style.opacity = 1;
                img.style.transform = 'translateY(0)';
            }
        });
    });
});
