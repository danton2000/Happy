//chamando o resultado da função execute(db)
const Database = require("./db");

const saveOrphanage = require("./saveOrphanage");

//then (então)
//async libera mais funcionalidades, await não precisa do .then, aguarda na linha
Database.then(async db => {
  //insere dados na tabela
  await saveOrphanage(db, {
    lat: "-30.1293083",
    lng: "-51.2182905",
    name: "Fundação de Proteção Especial 2",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "123456789",
    images: [
      //array das imagens
      "https://source.unsplash.com/random?id=4",

      "https://source.unsplash.com/random?id=5"
    ].toString(),
    instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 8h até 18h",
    open_on_weekends: "0"
  })

  //consultar dados da tabela
  //buscar todos os dados do bd
  //eu aguardo ele, depois ele retorna numa variavel
  const selectedOrphanages = await db.all('SELECT * FROM orphanages')
  //a resposta
  console.log(selectedOrphanages)

  //consultar somente 1 orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  console.log(orphanage)

  //deletar dados da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
});

