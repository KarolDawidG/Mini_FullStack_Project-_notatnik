require('dotenv').config();     //sprawia ze wyszukuje proces env i podstawia do config


module.exports = {
    port: process.env.PORT || 3001,
    database: process.env.DATABASE || 'mongodb://127.0.0.1:27017/notateczki-app'
};