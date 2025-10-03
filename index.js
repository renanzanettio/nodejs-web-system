import express from 'express';

import indexController from './controllers/indexController.js';
import artistsController from './controllers/ArtistsController.js';
import playlistsController from './controllers/PlaylistsController.js';
import TimeMachineController from './controllers/TimeMachineController.js';

const app = express();

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