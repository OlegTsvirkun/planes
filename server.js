const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const planesRoute = require('./routes/planes')
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static(__dirname + "/assets"));

app.use('/api/planes',  require('./routes/planes'));

mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`APP LISTENING PORT: ${PORT}`);
    })
});