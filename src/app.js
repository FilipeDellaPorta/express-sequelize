const express = require('express');
const routes = require('./routes'); //pega o index.js automaticamente

const app = express();

routes(app)

//app.use(express.json());

// app.get('/teste', (req, res) => {
//   res
//     .status(200)
//     .send({ mensagem: 'boas-vindas à API' });
// });

module.exports = app;
