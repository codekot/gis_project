// Base map
var startPoint = [56.85, 53.25]
var startZoom = 12
var map = L.map('map').setView(startPoint, startZoom);

var osm = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);
var terrain = L.tileLayer.provider('Stamen.Terrain');
var esriImage = L.tileLayer.provider('Esri.WorldImagery');
var esriTopo = L.tileLayer.provider('Esri.WorldTopoMap');


var baseMaps = {
"OpenStreetMap": osm,
"Stemen Terrain": terrain,
"Esri Imagery": esriImage,
"Esri Topo": esriTopo}

var layerControl = L.control.layers(baseMaps).addTo(map);

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
    var file = document.getElementById("file").files[0];
    var formData = new FormData();
    formData.append("file", file);
    console.log("Here is file object");
    console.log(file);

    // validate file
    if (!file) {
        alert("Please select a file to upload.");
        return;
    }

    if (file.size > 1000000) {
        alert("File size is too large. Please choose a file under 1MB.");
        return;
    }

    /*if (file.type !== "text/csv" && file.type !== "text/plain") {
        alert("File type is not supported. Please choose a CSV file.");
    return;
    }*/

    fetch("/upload_markers", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        console.log(response.text());
        return response.text();
    })
    .then(data => {
        // handle the response
        // console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

document.getElementById("addMarker").addEventListener("click", addMarker)
//document.getElementById("loadMarkers").addEventListener("click", loadMarkers)
document.getElementById("file").addEventListener("change", loadMarkers)
