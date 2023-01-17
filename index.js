const express = require('express');
const app = express();
const {port} = require('./config'); //destrukturyzacja
const apiRouter = require('./routers/api');

// routers
app.use('/', apiRouter);

// server
app.listen(port, ()=>{
    console.log('serwer slucha');
});