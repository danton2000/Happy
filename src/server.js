//npm = node package manager, gerenciador de dependencias do node.js(tipo um composer do php)
//instalar na raiz do projeto, npm init -y, npm install express, vai instalar o node_modulos e package-lock.json(mapeamento de todas as dependencias), npm install hbs (pacote handlebar é um template engine para layouts dinamicos)
// o require() chama os pacotes, importando as dependencia
const express = require("express");

//path = deixa o caminho com a "/" corretas
const path = require("path");

const pages = require("./pages.js");

//iniciando o express, express viro uma função express, retorno vai fica dentro do server(é um obj)
const server = express();

//queryStrings = https://asdasd/?id=1
server
  //utilizando os arquivos estaticos(css, img)
  .use(express.static("public"))

  //configurar template engine, caminho da view engine
  //__dirname = pasta atual
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //criando rotas, caminhos, get(qual a rota, rota raiz, segundo arg é a função)
  //chamando por referencia
  //rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage);

//ligando o servidor, escutar uma porta
//ctrl + j = terminal
//npm install nodemon, monitoramento do node, para atualizar o servidor automaticamente
server.listen(5500);
