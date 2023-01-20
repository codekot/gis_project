// Base map
    var startPoint = [56.85, 53.25]
    var startZoom = 12
    var map = L.map('map').setView(startPoint, startZoom);

    var osm = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);
    var terrain = L.tileLayer.provider('Stamen.Terrain').addTo(map);
    var esriImage = L.tileLayer.provider('Esri.WorldImagery').addTo(map);
    var esriTopo = L.tileLayer.provider('Esri.WorldTopoMap').addTo(map);

//    var osmOld = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//        maxZoom: 19,
//        attribution: '© OpenStreetMap'
//    }).addTo(map);

    // add Stamen Watercolor to map.


    var baseMaps = {
    "OpenStreetMap": osm,
    "Stemen Terrain": terrain,
    "Esri Imagery": esriImage,
    "Esri Topo": esriTopo}

    var layerControl = L.control.layers(baseMaps).addTo(map);

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

 function addMarker() {
    map.once("click", function(e){onMapClick(e)});
}

    function loadMarkers() {
        alert("Loading markers from csv file")
    }

    // map.on('click', onMapClick);
    //document.body.addEventListener("click", myFunction,{once:true})
    //document.getElementById("addMarker").onclick = onButtonClick
    //document.getElementById("addMarker").onclick = onButtonClick
    document.getElementById("addMarker").addEventListener("click", addMarker)
    document.getElementById("loadMarkers").addEventListener("click", loadMarkers)