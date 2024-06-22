document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];
    const images = document.querySelectorAll('.image-section img');

    // 显示模态框并放大图片
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden'; // 禁止背景滚动
            document.body.style.filter = 'blur(5px)'; // 背景高斯模糊
        });
    });

    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复背景滚动
        document.body.style.filter = 'none'; // 移除背景高斯模糊
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // 恢复背景滚动
            document.body.style.filter = 'none'; // 移除背景高斯模糊
        }
    });

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
