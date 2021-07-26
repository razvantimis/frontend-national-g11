var heightOutput;
var widthOutput;

window.onload = function () {
    heightOutput = document.querySelector('#height');
    widthOutput = document.querySelector('#width');
}

//document.addEventListener('DOMContentLoaded', function() {
//    
// })

function resize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

// window.onresize = resize;

window.addEventListener('resize', resize);