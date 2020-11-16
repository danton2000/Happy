//importando os obj de orfanatos
// const orphanages = require('./database/fakedata.js')//57:17

//chamando o banco de dados
const Database = require("./database/db");

const saveOrphanage = require("./database/saveOrphanage");

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

  async orphanage(req, res) {
    //pegando o id
    const id = req.query.id
    
    try {
      const db = await Database;
      //pegando 1 orphanage
      const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
      // console.log(results[0])
      const orphanage = results[0]

      //convertar a imagem para arrays
      //busca na string, pega as string que termina por "," e dividi a string, virando posições
      orphanage.images = orphanage.images.split(",")
      orphanage.firstImage = orphanage.images[0]
  
      //dizendo que o open_on_weekends se for 0 é falso(if ternário)
      if(orphanage.open_on_weekends == "0"){
        orphanage.open_on_weekends = false
      } else {
        orphanage.open_on_weekends = true
      }

      //enviando o obj para a template engine
      return res.render('orphanage', { orphanage })
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados!')
    }
  },

  async orphanages(req, res) {
    //tentar
    try {
      const db = await Database;
      //enviar os dados para esta pagina
      //mostrando os orphanages
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados!')
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

   async saveOrphanage(req, res){
    //tenho os dados no:
    //body sempre vai vim vazio se não configurar o server
    // console.log(req.body)
    const fields = req.body
    //validar se todos os campos estão preenchidos
    //pegando os VALORES do objeto passado pelo usuario, posso fazer verificação nesses valores, transfoma tudo em valores num array
    //verifica todos os valores no array, e verfica se tem algo vazio, se ele encontrar, vai ser true, se achar algo vazio(true), vai entrar na função
    // console.log(Object.values(fields).includes(''))
    if(Object.values(fields).includes('')){
      //manda esse alerta para a pessoa
      return res.send('Todos os campos devem ser preenchidos!')
    }

    //se tiver algum error
    try {
      //salvar um orfanato
      const db = await Database
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      })

      //redirecionamento
      return res.redirect('/orphanages')
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados!')
    }
  }
};
