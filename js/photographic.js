
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.container {
    max-width: 1400px; /* 增加页面宽度 */
    margin: 0 auto;
    padding: 2rem;
    flex: 1;
}

.content {
    display: flex;
    flex-direction: column; /* 改为列方向 */
    gap: 2rem;
}

.image-section {
    flex: 2;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem; /* 确保图片位置和左边Artwork文字对齐 */
}

.image-section img {
    width: 100%; /* 确保图片和页面一样宽 */
    height: auto;
    max-height: 800px; /* 确保图片最大高度 */
    cursor: pointer; /* 鼠标悬停时显示为指针 */
    transform: translateY(100px); /* 初始位置 */
    opacity: 0; /* 初始透明度 */
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* 过渡效果 */
}

.image-section img.visible {
    transform: translateY(0); /* 滑动到最终位置 */
    opacity: 1; /* 最终透明度 */
}

/* Modal styles */
.modal {
    display: none; /* 默认隐藏 */
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: white; /* 背景颜色变成白色 */
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    display: block;
    transition: transform 0.3s ease-in-out; /* 添加缩放过渡效果 */
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #000;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: black;
    font-weight: bold;
    font-size: 20px;
    transition: 0.3s;
    user-select: none;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
}

@media (max-width: 768px) {
    .content {
        flex-direction: column;
    }
}
