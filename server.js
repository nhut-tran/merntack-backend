const express = require('express');
const router = require('./router/router')


require('dotenv').config();
const app = express();

app.use('/api/countries', router);

app.listen(process.env.PORT, () => {
    console.log('server start')
})