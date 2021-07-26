
var myWindow;

function openWindow() {
    myWindow = window.open("", "myWindow", "width=500, height=500");
    myWindow.document.write("<p>This is 'myWindow'</p>");
    setTimeout(close, 3000);
}

function close() {
    myWindow.close();
}

function openWithConfirm() {
    window.confirm("Are you sure that you want to close?");
    if (window.confirm("Do you really want to open?")) {
        openWindow();
    }
}

