const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);
app.listen(3333); //App roda na porta 3333


//node index.js para execultar a aplicação 

//criar p[rojeto React npm create-react-app nome-do-projeto
//npm start para iniciar a aplicação node 


//Request.params:  Usada para pegar o parametro enviado atraves da rota ex /usuario/3   vai resgatar o "3"
//Request Body: Dados (Capturar Json use  )
//Query build: knexjs   fazer query usando o java Script
//useNullAsDefault: aceita valores null no sqlligt
/*
npm knex init: para execultar 
npx knex
*/