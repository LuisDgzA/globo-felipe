// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: 19.697261540267355, lng: -98.8328436000443 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 16,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// initMap()


const attribution = "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";

/** Tipo de mapa donde se va a renderizar */
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ';

/** var mapa global */
var myMap = L.map('map');

/** agregar el tipo de mapa a una ccapa del mapa */
L.tileLayer(tilesProvider, {
    attribution,
    maxZoom: 18,
}).addTo(myMap);

myMap.setView([19.697261540267355, -98.8328436000443],18);
let ubicacionActual = { lat: 19.697261540267355, lng: -98.8328436000443 }
 /** añadir marcador */
markerOrigen = L.marker(ubicacionActual);

/** añadir a una capa el marcador */
myMap.addLayer(markerOrigen); 