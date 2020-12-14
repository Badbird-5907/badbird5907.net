var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
    res.status(200).render(__dirname +  '/../views/downloads/downloads');
})

module.exports = router;
