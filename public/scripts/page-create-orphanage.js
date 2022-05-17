const map = L.map('mapid').setView([-5.8018, -35.1968], 12);

L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//criar e adicionar o marcador

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove o marcador do mapa
    marker && map.removeLayer(marker)

    //adiciona o marcador
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//adicionar o campo de fotos
function addPhotoField(){
    //pegar o contêiner de fotos
}