const express = require('express');
const app = express();
const {port} = require('./config'); //destrukturyzacja
const apiRouter = require('./routers/api');
const bodyParser = require('body-parser');

// parsery
// Content-type: application/json
app.use(bodyParser.json());

// baza danych
require('./dataBase/mongoose');

// routers
app.use('/api/', apiRouter);

// server
app.listen(port, ()=>{
    console.log('serwer slucha');
});