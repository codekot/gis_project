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

$(document).ready(function () {$('#table').DataTable();})