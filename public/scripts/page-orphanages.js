//criando a variavel const map, L é um objeto, .map é uma função, setView = ajuste de visualização, tem um array = coleção de valores(lista), array com 2 posições, latitude e longitude e o zoom
//pegando o mapa
const map = L.map("mapid").setView([-30.1293083,-51.2282905], 15);

//mapa gratuito
//pegando o L, tileLayer = primeira camada que vai receber o mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
// addTo = adicionar para(map)

//create icon, um argumento do tipo obj{}
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58,58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

//create popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src ="./public/images/arrow-white.svg" </a>')

//create and add marker

//colocando um popup no map(marcação)
L.marker([-30.1293083,-51.2282905], { icon })
  .addTo(map)
  //ligando o popup
  .bindPopup(popup)
  //abre o popup
  .openPopup();
