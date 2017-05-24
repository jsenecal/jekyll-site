(function ($) {
    "use strict";
    function initialize_map() {
        var myLatLng = new google.maps.LatLng(45.553198, -73.612906);

        var mapOptions = {
            zoom: 10,
            center: myLatLng,
            disableDefaultUI: true,
            scrollwheel: true,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {"stylers": [{"hue": "#00aaff"}, {"saturation": -100}, {"gamma": 2.15}, {"lightness": 1}]}, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"visibility": "on"}, {"lightness": -20}]
            }, {"featureType": "road", "elementType": "geometry", "stylers": [{"lightness": 57}]}]
        };
        var mapElement = document.getElementById('map-canvas');
        var icon = {
            url: 'images/map-marker.png', // url
            scaledSize: new google.maps.Size(64, 64) // scaled size
        };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: new google.maps.Map(mapElement, mapOptions),
            icon: icon
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_map);
})(jQuery);
