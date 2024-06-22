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
});
