function initMap() {
  // The location of Uluru
  const uluru = { lat: 19.697261540267355, lng: -98.8328436000443 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

initMap()
