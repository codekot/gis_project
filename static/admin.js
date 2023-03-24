// Base map
//var startPoint = [56.85, 53.25]
//var startZoom = 12
//var map = L.map('map').setView(startPoint, startZoom);
//
//var osm = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);
//var terrain = L.tileLayer.provider('Stamen.Terrain');
//var esriImage = L.tileLayer.provider('Esri.WorldImagery');
//var esriTopo = L.tileLayer.provider('Esri.WorldTopoMap');
//
//
//var baseMaps = {
//"OpenStreetMap": osm,
//"Stemen Terrain": terrain,
//"Esri Imagery": esriImage,
//"Esri Topo": esriTopo}
//
//var layerControl = L.control.layers(baseMaps).addTo(map);
//var table

// Get all tasks and draw them in the table
function getAndDrawTasks(){
    fetch('/tasks/all')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const dataArray = data.map(obj => [obj.id, obj.task_name, obj.status, obj.latitude, obj.longitude]);
        //const dataParsed = JSON.parse(data);
        table.rows.add(dataArray).draw();
       })
}

$(document).ready(function () {
    table = $('#table').DataTable({
    columnDefs: [{
      targets: 0, // index of the column to hide
      visible: false
    }]
  });
    getAndDrawTasks();
})
