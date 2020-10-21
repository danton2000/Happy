//criando a variavel const map, L é um objeto, .map é uma função, setView = ajuste de visualização, tem um array = coleção de valores(lista), array com 2 posições, latitude e longitude e o zoom
//pegando o mapa
const map = L.map("mapid").setView([-30.033056, -51.230000], 13);

//mapa gratuito
//pegando o L, tileLayer = primeira camada que vai receber o mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
// addTo = adicionar para(map)

//create icon, um argumento do tipo obj{}
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 58],
  iconAnchor: [29, 68],
});

//create marker
var marker;

//add markers
//função onvindo alguma coisa(click)
map.on("click", (event) => {
  //pegando a latitude e longitude
  // console.log(event);
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  //pegando o lat e lng e colocando nos input escondidos hiden
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  //remover icon anteriror
  //se tiver um marcador ele remove, se não add
  marker && map.removeLayer(marker);

  //modifico toda vez que o marker é criando
  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar o campo de fotos
function addPhotoField() {
  // console.log('está funcionando')
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar todos os container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima adicionada, [quantas imagens(tamanho), achando a posição correta]
  //cloneNode = clona tudo(true)
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o campo está vazio, se sim, não adicionar ao container de #imagens
  const input = newFieldContainer.children[0];
  //verificando se o campo está vazio
  // console.log(input.value == "")

  if (input.value == "") {
    // se o campo é igual a vazio, elimar o resto da aplicação, bloquear
    return;
  }
  //limpando o campo clonado antes de adicionar ao container de #images
  //verificando os filhos
  //console.log(newFieldContainer.children) input ta no index 0, limpar o input
  input.value = "";

  //adicionar o clone ao container de #images
  //appendChild = acrescentar filho(newFieldContainer) ao container da #images
  container.appendChild(newFieldContainer);
}

//função de apagar campos de imagens
function deleteField(event) {
  //event.currentTarget = quem é que está disparando esse evento(span)
  // console.log(event.currentTarget)
  const span = event.currentTarget;

  //pegar todos os container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //verificando o numero do tamanho
  // console.log(fieldsContainer.length)

  if (fieldsContainer.length < 2) {
    //se fieldsContainer.length for menor que 1, não apaga nada
    //limpar o valor do campo
    //pegando o pai, depois o filho na posição 0, limpando o value
    span.parentNode.children[0].value = "";
    return;
  }

  //verificando o numero do tamanho
  // console.log("cheguei aqui!")

  //deletar o campo
  //pegando o pai(new-upload) clonado!
  span.parentNode.remove();
}

//selecionar sim ou não
function toggleSelect(event) {
  // console.log(event)

  //retirar a class .active (dos botoes)
  //pegando todos os botoes
  //percorrer para cada botao para retirar o .actives
  //arrow function sem chaves
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // colocar a class .active nesse botao clicado
  //botao que está clicado
  const button = event.currentTarget
  button.classList.add("active")

  //atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')
  // console.log(input)

  //verificar se sim ou não
  input.value = button.dataset.value
}
