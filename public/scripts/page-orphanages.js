//criando a variavel const map, L é um objeto, .map é uma função, setView = ajuste de visualização, tem um array = coleção de valores(lista), array com 2 posições, latitude e longitude e o zoom
//pegando o mapa
const map = L.map("mapid").setView([-30.1293083, -51.2282905], 15);

//mapa gratuito
//pegando o L, tileLayer = primeira camada que vai receber o mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
// addTo = adicionar para(map)

//create icon, um argumento do tipo obj{}
const icon = L.icon({
  iconUrl: " /images/map-marker.svg",
  iconSize: [58, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//vai ser executada pelo menos 2x, ou pra cada marcacao no mapa
//passando um objeto como paramentro
//orphanage é um obj, criando o marcador
function addMarker({ id, name, lat, lng }) {
  //create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" </a>`
  );

  //create and add marker

  //colocando um popup no map(marcação)
  L.marker([lat, lng], { icon })
    .addTo(map)
    //ligando o popup
    .bindPopup(popup)
    //abre o popup
    .openPopup();
}

//pega todos os spans, e os dados
const orphanagesSpan = document.querySelectorAll(".orphanages span");
// console.log(orphanagesSpan);
// é um nodeList consegue rodar o foreach
orphanagesSpan.forEach((span ) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  };

  //enviando os dados
  addMarker(orphanage);
});
