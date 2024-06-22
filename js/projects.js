<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow: hidden;
        }
        .container {
            display: flex;
            flex: 1;
            overflow: hidden;
        }
        .projects-content {
            flex: 0 0 30%;
            padding: 1rem;
            background-color: #fff;
            overflow-y: auto;
        }
        .project-category {
            margin-bottom: 1rem;
        }
        .project-category h2 {
            margin-bottom: 0.5rem;
            color: #333;
            font-size: 1rem;
        }
        .project-category ul {
            list-style: none;
            padding: 0;
        }
        .project-category ul li {
            margin-bottom: 0.25rem;
        }
        .project-category ul li a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
            transition: color 0.3s;
            font-size: 0.875rem;
        }
        .project-category ul li a:hover,
        .project-category ul li a.active {
            color: #00ff00; /* 选中文字颜色改为绿色 */
        }
        .project-details {
            flex: 1;
            padding: 1rem;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .project-details img {
            width: 100%;
            height: auto;
            max-height: 600px;
            cursor: pointer;
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
        /* 自适应设计 */
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
            }
            .projects-content, .project-details {
                flex: none;
                width: 100%;
                height: 50vh;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <h1>ZHANGWENQING</h1>
        </div>
        <nav>
            <ul>
                <li><a href="../index.html">HOME</a></li>
                <li><a href="../about.html">ABOUT</a></li>
                <li><a href="projects.html" class="active">PROJECTS</a></li>
                <li><a href="../contact.html">CONTACT</a></li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <section class="projects-content">
            <div class="project-category">
                <h2>ART WORKS</h2>
                <ul>
                    <li><a href="midjourney.html" data-page="midjourney.html" data-image="image1"><span>#01 Midjourney Projects</span></a></li>
                    <li><a href="3d.html" data-page="3d.html" data-image="image2"><span>#02 3D Projects</span></a></li>
                    <li><a href="photographic.html" data-page="photographic.html" data-image="image3"><span>#03 Photographic Works</span></a></li>
                    <li><a href="shortfilm.html" data-page="shortfilm.html" data-image="image4"><span>#04 Short Film Works</span></a></li>
                </ul>
            </div>
            <div class="project-category">
                <h2>2017 - 2024</h2>
                <h2>WORK EXAMPLES</h2>
                <ul>
                    <li><a href="truesight.html" data-page="truesight.html" data-image="image5"><span>#05 TRUESIGHT Work Examples</span></a></li>
                    <li><a href="xiaomi.html" data-page="xiaomi.html" data-image="image6"><span>#06 XIAOMI Work Examples</span></a></li>
                    <li><a href="bytedance.html" data-page="bytedance.html" data-image="image7"><span>#07 BYTEDANCE Work Examples</span></a></li>
                    <li><a href="metu.html" data-page="metu.html" data-image="image8"><span>#08 METU Work Examples</span></a></li>
                </ul>
            </div>
            <div class="project-category">
                <h2>2015 - 2016</h2>
                <h2>FASHION JOURNEY</h2>
                <ul>
                    <li><a href="graduation.html" data-page="graduation.html" data-image="image9"><span>#09 Graduation Project</span></a></li>
                    <li><a href="cjyao.html" data-page="cjyao.html" data-image="image10"><span>#10 C.J.YAO Work Examples</span></a></li>
                </ul>
            </div>
        </section>
        <div class="project-details">
            <img src="../images/photographic-images/photographic-image1.png" id="image1" class="project-image">
            <img src="../images/photographic-images/photographic-image2.png" id="image2" class="project-image">
            <img src="../images/photographic-images/photographic-image3.png" id="image3" class="project-image">
            <img src="../images/photographic-images/photographic-image4.png" id="image4" class="project-image">
            <img src="../images/photographic-images/photographic-image5.png" id="image5" class="project-image">
            <img src="../images/photographic-images/photographic-image6.png" id="image6" class="project-image">
            <img src="../images/photographic-images/photographic-image7.png" id="image7" class="project-image">
            <img src="../images/photographic-images/photographic-image8.png" id="image8" class="project-image">
            <img src="../images/photographic-images/photographic-image9.png" id="image9" class="project-image">
            <img src="../images/photographic-images/photographic-image10.png" id="image10" class="project-image">
        </div>
    </div>

    <!-- Modal for enlarged image -->
    <div id="modal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="modal-img">
        <a class="prev" onclick="changeImage(-1)">&#10094;</a>
        <a class="next" onclick="changeImage(1)">&#10095;</a>
    </div>

    <script src="../js/projects.js"></script>
</body>
</html>
