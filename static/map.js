// Base map
    var map = L.map('map').setView([56.85, 53.25], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

// Addition layer
//    var ortho = L.geoPackageTileLayer([], {
//     geoPackageUrl: '',
//     layerName: 'ortho',
//     style: {color: 'green'}
//    }).addTo(map);

    var popup = L.popup();

    function onMapClick(e) {
        L.marker().setLatLng(e.latlng).addTo(map);
        popup
            .setLatLng(e.latlng)
            .setContent("Coordinates at this point: " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);