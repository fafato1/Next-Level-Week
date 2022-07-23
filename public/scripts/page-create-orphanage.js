const map = L.map('mapid').setView([-5.8018, -35.1968], 12);

L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
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

    //pegar o contêiner de fotos #images
    const container = document.querySelector('#images')
    //pegar o contêiner para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar a duplicação da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //Verificar se o campo está vazio
    const input = newFieldContainer.children[0]

    //limpar o campo antes de adicionar ao contêiner de imagens
    if(input.value == ""){
        return
    }


    input.value = ""
    
    //adicionar o clone ao contêiner de images
    container.appendChild(newFieldContainer)

}

function deleteField(event){

    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();

}

//Select yes or no buttons
function toggleSelect(event){
    
    // remove .active class from all buttons

    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active') )  //função em linha única

    // get the clicked button

    const button = event.currentTarget
    button.classList.add('active')

    // update my hidden input with selected value

    const input = document.querySelector('[name="open_on_weekends"]')
    

    // verify if is true or not

    input.value = button.dataset.value

    // insert the .active class

}

function validate(event){
    const lat = document.querySelector('[name=lat]').value;
    const lng = document.querySelector('[name=lng]').value;

    if(lat == '' || lng == ''){
        event.preventDefault()
        alert('Selecione um ponto no mapa!' + lat + lng)
    }
}