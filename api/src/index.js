const express = require('express');
var cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

 app.listen(3001, () => console.log('Servidor rodando'));
