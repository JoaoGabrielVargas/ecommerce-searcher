const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors())

require('./database');

app.use(express.json()); 
app.use(router);

app.listen(3001, () => {
    console.log('api rodando na porta 3001')
})