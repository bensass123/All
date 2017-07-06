
var sendLoc = () => {
    var startPos;
    var geoSuccess = function(position) {
        startPos = position;
        alert(startPos.coords.latitude);
        alert(startPos.coords.longitude);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
}

