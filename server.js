const express = require('express');
const router = require('./router/router')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(cors())
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.use(express.json());

app.use('/api/countries', router);

mongoose.connect(process.env.MONGODB_CONNECT).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('server start')
    })
}).catch(e => {
    console.log(e)
})
