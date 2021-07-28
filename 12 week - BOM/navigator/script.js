

const success = (position) => {
    const positionDiv = document.getElementById('position');
    console.log(position);
    // https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition
    positionDiv.innerText = `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`;
}

const error = (error) => {
    const positionDiv = document.getElementById('position');
    console.log(error);
    positionDiv.innerText = "User blocked location";
}

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
navigator.geolocation.getCurrentPosition(success, error);