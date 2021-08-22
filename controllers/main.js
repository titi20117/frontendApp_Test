const data = require('../data/data.json');
exports.main = (req, res) => {
    res.render('home', {data: data})
};