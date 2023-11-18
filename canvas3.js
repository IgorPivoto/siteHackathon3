
var canvas = document.querySelector('canvas');

var objetos = canvas.getContext('2d');



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let inicioX = 0;
let inicioY = 450;
let timer = 0;

let travaAnimacao = false;
var trava = 0;

function GeraCirculo() {   

    




    inicioX += 4.3;  
    inicioY += 0.6;  

    
    if (inicioX > canvas.width + 50 || inicioY > canvas.height + 50) 
    {
        travaAnimacao = true;
    }
   

    objetos.beginPath();
    objetos.arc(inicioX, inicioY, 50, 0, Math.PI * 2, false);
    objetos.fillStyle = 'rgba(0, 256, 256, 1)';
    objetos.fill();

    if(travaAnimacao == false)
    {
        requestAnimationFrame(GeraCirculo);
    }
    else if(travaAnimacao == true)
    {

       // Videolindo();
        DesabilitarCanvas();
    }

}
GeraCirculo();
function DesabilitarCanvas() {

  
    var canvas3 = document.querySelector('canvas');
    

    canvas3.disabled = true;

    canvas.width = undefined;
    canvas.height = undefined;
    console.log('Canvas3 desabilitado');
}   /*<video id="meuVideo" controls width="500" autoplay>
<source src="https://www.youtube.com/watch?v=FySznqTBvXA&pp=ygUbZXhwbG9zw6NvIGRhIGJvbWJhIG51Y2xlYXIg" type="video/mp4">
</video> */