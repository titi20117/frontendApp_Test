const express = require('express')
app = express()
const router = require('./routes/main');
// const data = JSON.parse(require('./data/data.json'));
// const data = require('./data/data.json');

require('dotenv').config();

//EJS
app.set('views', './views');
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs')

// app.use(express.static(__dirname + '/public'));
app.use(express.static('public'))
app.use('/', router);

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`)
})