function initMap() {
    var newStyle = [{
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "color": "#e0efef"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "hue": "#1900ff"
                },
                {
                    "color": "#c0e8e8"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                    "lightness": 100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "lightness": 700
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#7dcdcd"
            }]
        }
    ]
    var uluru = { lat: 38.5382, lng: -121.7617 };
    var mapOptions = {
        zoom: 13,
        center: uluru,
        backgroundColor: 'transparent',
        minZoom: 13,
        maxZoom: 18,
        keyboardShortcuts: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT,
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        styles: newStyle
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: uluru,
        animation: google.maps.Animation.DROP,
        map: map
    });


    var contentString = `<img class='img' src="https://cru.ucdavis.edu/documents/filesLibrary/large/MU_Front_Entrance_Rendering.jpg"/><h4>UC Davis MU</h4>`
    var InfoWindow = new google.maps.InfoWindow({
        content: contentString
    });


    // function droptheMarker() {
    //     marker.setAnimation(google.maps.Animation.DROP);
    //     if (marker.getMap() == null) {
    //         marker.setMap(map);
    //     }
    // }

    // function createDIV() {
    //     let div = `
    //         <div class="top">Center</div>
    //     `
    //     document.querySelector('#map').insertAdjacentHTML('beforeend', div)
    // }


    // createDIV();
    // // document.querySelector('.top').addEventListener('click', function() {
    // //     map.setCenter(uluru)
    // //     droptheMarker();
    // // })
    google.maps.event.addListener(marker, 'click', function() {
        InfoWindow.open(map, marker);
    })
    google.maps.event.addListener(map, 'bounds_changed', function() {
        console.log('resized')
    })

    var UDmapStyle1 = [];


}