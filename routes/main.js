const express = require('express');
const router = express.Router();
main = require('../controllers/main')

router.get('/', main.main);

module.exports = router;