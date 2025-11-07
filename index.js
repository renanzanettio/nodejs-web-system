import express from 'express';
const app = express();

import connection from './config/sequelize-config.js';

import TimeMachine from './models/TimeMachine.js';

import indexController from './controllers/indexController.js';
import artistsController from './controllers/ArtistsController.js';
import playlistsController from './controllers/PlaylistsController.js';
import TimeMachineController from './controllers/TimeMachineController.js';

connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error) => {
  console.log(`Ocorreu um erro ao se conectar com o banco de dados: ${error}`);
});

connection.query("CREATE DATABASE IF NOT EXISTS zspotify").then(() => {
  console.log("Banco de dados criado ou já existente.");
}).catch((error) => {
  console.log(`Ocorreu um erro ao criar o banco de dados: ${error}`);
});







app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', indexController);
app.use('/', artistsController);
app.use('/', playlistsController);
app.use('/', TimeMachineController);



// Iniciando o servidor HTTP
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor! ${error}`);
  } else {
    console.log(`Servidor iniciado na porta http://localhost:${port}`);
  }
});