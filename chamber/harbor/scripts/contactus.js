function initMap() {
    // The location of the Delhi Public School International
    const location = { lat: 0.3397, lng: 32.6022 };
    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}