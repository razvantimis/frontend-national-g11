var intervalId;

function stop() {
    clearInterval(intervalId);
}

function start() {
    changeColor();
}

function changeColor() {
    intervalId = window.setInterval(flashText, 1000);
}

function flashText() {
    var helloText = document.getElementById('hello');
    helloText.style.color = helloText.style.color === 'red' ? 'blue' : 'red';
}
