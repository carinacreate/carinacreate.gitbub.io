document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];
    const images = document.querySelectorAll('.image-section img');
    let currentIndex = 0;

    // 显示模态框并放大图片
    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalImg.style.transform = 'scale(1)'; // 重置缩放
            currentIndex = index;
            document.body.style.overflow = 'hidden'; // 禁止背景滚动
        });
    });

    // 关闭模态框
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
            modalImg.style.transform = '
