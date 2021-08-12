const express = require('express')
app = express()
const router = require('./routes/main');
const sass = require('node-sass-middleware');

app.use(
    sass({
        src: __dirname + '/sass',
        dest: __dirname + '/public/css',
        debug: true                
    })
);

require('dotenv').config()
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));
app.use('/', router);

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`)
})