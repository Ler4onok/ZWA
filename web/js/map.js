window.onload = function() {
    function initMap(){
        let masarka = {lat: 50.100644, lng: 14.387402};
        let map = new google.maps.Map(
            document.getElementById('map'), { zoom: 15, center: masarka });
        
        let marker = new google.maps.Marker({ position: masarka, map: map });
    }

    initMap();

    console.log('sdasdsa');
}