const initialCoords = { lat: 40.44699825339554, lng: -3.6751472005642563 }
let myMap

function init() {
    renderMap()
    getUserLocation()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 15, center: initialCoords, styles: mapStyles.retro }
    )
}


function getUserLocation() {

    navigator.geolocation.getCurrentPosition(
        position => updateMap(position),
        error => console.error('EL ERROR ES', error)
    )
}


function updateMap({ coords }) {

    const { latitude: lat, longitude: lng } = coords

    myMap.setCenter({ lat, lng })

    new google.maps.Marker({ position: { lat, lng }, map: myMap })
}