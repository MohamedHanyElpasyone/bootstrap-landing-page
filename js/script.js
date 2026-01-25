// MAP
var map = L.map("map", {
  zoomControl: false,
  dragging: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false,
  tap: false,
  touchZoom: false,
}).setView([51.505, -0.09], 19);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
