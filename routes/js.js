var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
    res.status(404).render(__dirname +  '/../views/404');
})
router.get('/render.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/js/', 'render.js'));
})

module.exports = router;
