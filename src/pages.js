//importando os obj de orfanatos
const orphanages = require('./database/fakedata.js')

//vai conter as funções das rotas
//exportando o objeto
module.exports = {
  //index recebe a função como propriedade
  // index(req, res) {
  //   //request = requisião
  //   //response = resposta
  //   //__dirname = pasta atual
  //   //path.join(__dirname, 'pasta')
  //   // console.log(path.join(__dirname, 'views', 'index.html'))
  //   // sendFile(onde está o arquivo)
  //   //vai pegar todos os dados da url(queryStrings), objeto
  //   // queryStrings
  //   //render()
  //   //enviar dados para o html(hbs)
  //   // const city = req.query.city;

  //   return res.render("index")
  // },

  index(req, res) {
    return res.render("index");
  },

  orphanage(req, res) {
    return res.render("orphanage");
  },

  orphanages(req, res) {
    //enviar os dados para esta pagina
    return res.render("orphanages", {orphanages});
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },
};
