var video = document.getElementById('videoPlayer');
var videoCanvas = document.getElementById('videoCanvas');
var fullscreenButton = document.getElementById('fullscreenButton');


videoCanvas.width = window.innerWidth;
videoCanvas.height = window.innerHeight;

video.addEventListener('loadedmetadata', function() {
    resizeVideo();
    animate();
});

fullscreenButton.addEventListener('click', toggleFullscreen);

function resizeVideo() {
    var videoAspectRatio = video.videoWidth / video.videoHeight;
    var windowAspectRatio = window.innerWidth / window.innerHeight;

    if (windowAspectRatio > videoAspectRatio) {
        video.style.width = '100%';
        video.style.height = 'auto';
    } else {
        video.style.width = 'auto';
        video.style.height = '100%';
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function animate() {

    
    // Ajuste as coordenadas x e y para posicionar o vídeo mais para cima
    var videoX = 0;
    var videoY = -100;

    //ctx.drawImage(video, videoX, videoY, videoCanvas.width, videoCanvas.height);
    requestAnimationFrame(animate);
}







/*var video = document.getElementById('myVideo');
var videoCanvas = document.getElementById('videoCanvas');
var ctx = videoCanvas.getContext('2d');

videoCanvas.width = window.innerWidth;
videoCanvas.height = window.innerHeight;

video.addEventListener('loadedmetadata', function() {
    videoCanvas.width = video.videoWidth;
    videoCanvas.height = video.videoHeight;
    animate();
});

function animate() {
    // Não é necessário chamar a função Scrow() aqui

    // Desenha o vídeo no canvas
    ctx.drawImage(video, 0, 0, videoCanvas.width, videoCanvas.height);

    // Solicita a próxima animação
    requestAnimationFrame(animate);
}

// Evento para iniciar a rolagem assim que o vídeo começar a ser reproduzido
video.addEventListener('play', function() {
    scrollIntoView();
});

// Função para rolar para baixo o elemento do vídeo
function scrollIntoView() {
    video.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}*/
/*
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoPlayer');
    var videoCanvas = document.getElementById('videoCanvas');
    var ctx = videoCanvas.getContext('2d');

    videoCanvas.width = window.innerWidth;
    videoCanvas.height = window.innerHeight;

    video.addEventListener('loadedmetadata', function() {
        videoCanvas.width = video.videoWidth;
        videoCanvas.height = video.videoHeight;
        animate();
    });

    function animate() {
        scrollIntoView();
        ctx.drawImage(video, 0, 0, videoCanvas.width, videoCanvas.height);
        requestAnimationFrame(animate);
    }

    function scrollIntoView() {
        video.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});
*/
