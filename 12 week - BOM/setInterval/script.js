var intervalId;

function changeColor() {
    intervalId = window.setInterval(flashText, 1000);
}

function flashText() {
    var helloText = document.getElementById('hello');
    helloText.style.color = helloText.style.color === 'red' ? 'blue' : 'red';
}

function stopTextColor() {
    clearInterval(intervalId);
}

function startTextColor() {
    changeColor();
}