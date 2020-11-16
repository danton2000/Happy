//criando um objeto, preciso colocar esse obj como argumento de alguma função
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//localização sendo pega no span(recebe do bd)
//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//criando a variavel const map, L é um objeto, .map é uma função, setView = ajuste de visualização, tem um array = coleção de valores(lista), array com 2 posições, latitude e longitude e o zoom
//pegando o mapa
//pegando do bdd

const map = L.map("mapid", options).setView([lat, lng], 15);

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

//create and add marker
//colocando um popup no map(marcação)
//pegando do bd

L.marker([lat, lng], { icon }).addTo(map);

// image galley

function selectImage(event){
  //está observando cada click
  //alvo atual(button)
  const button = event.currentTarget
  console.log(button.children)
  //remover todas as classes .active(só tem um), andar nos botoes e remover a classe .active
  //pesquise por todos os seletores que vou colocar como argumentos
  const buttons = document.querySelectorAll(".images button")
  //tenho todos os botoes
  //nodelist tem mais funcionalidades(foreach), para cada botao eliminar a classe .active
  //cada button tem uma classList, ela consegue remover alguma coisa
  //novo contexto
  buttons.forEach((button) => {button.classList.remove("active")})

  //selecionar imagem clicada
  //filhos do botao
  //posição 0 é uma img
  const image = button.children[0]
  //quero pega 1 só
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem(img grande)
  imageContainer.src = image.src

  //adicionar a classe .active para este botao que foi clicado!
  button.classList.add("active")
}
