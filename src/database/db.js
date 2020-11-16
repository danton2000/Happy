//chamando o banco de dados, e vai vira um obj
const Database = require('sqlite-async');

//executando esse obj, abra o diretorio database, e coloca um arquivo, se não tiver esse arquivo
//Leva um tempo essa funcionalidade
//database abre esse aquivo, ENTÃO, vc entra aqui e executa essa função
// Database.open(__dirname + '/database.sqlite').then(execute)

//função de execucao
function execute(db){
    //VERIFICAR SE ENTREI NESSA FUNÇÃO
    // console.log('entrei nessa função')

    // db é um obj, executa o sql
    //posso retorna o resultado dessa função devolta para o then
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

//vai pegar o resultado disso e jogar para fora, resultado é o db, irei pega esse db fora de um outro arquivo
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)



