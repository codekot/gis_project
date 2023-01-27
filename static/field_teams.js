// Add Latitude Longitude if "Use divice coordinates" checked
const useDeviceCoordinates = document.getElementById("use_device_coordinates");

useDeviceCoordinates.addEventListener("change", function() {
  if(this.checked) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById("lat").value = position.coords.latitude;
      document.getElementById("long").value = position.coords.longitude;
    });
  }
});
document.getElementById("lat").addEventListener("change", function() {
  useDeviceCoordinates.checked = false;
});;
document.getElementById("long").addEventListener("change", function() {
  useDeviceCoordinates.checked = false;
});;


// Set current date/time if "Use current time" checked
const useCurrentTime = document.getElementById("use_current_time");
const datetimeInput = document.getElementById("datetime");

useCurrentTime.addEventListener("change", function() {
    if (useCurrentTime.checked) {
        const currentDate = new Date();
        datetimeInput.value = currentDate.toISOString().slice(0, -8);
    } else {
        datetimeInput.value = "";
    }
});

datetimeInput.addEventListener("change", function() {
    useCurrentTime.checked = false;
});