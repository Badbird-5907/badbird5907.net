var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
    res.status(200).render(__dirname +  '/../views/search');
})
router.get('/render.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/js/', 'render.js'));
})

module.exports = router;
