var heightOutput;
var widthOutput;

window.onload = function () {
    heightOutput = document.querySelector('#height');
    widthOutput = document.querySelector('#width');
}


// also can use this event listener to wait for content loading
//document.addEventListener('DOMContentLoaded', function() {
//    
// })

function resize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}


window.addEventListener('resize', resize);
// is the same as adding an event listener to the window
// window.onresize = resize;