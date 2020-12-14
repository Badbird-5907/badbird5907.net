var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
    res.status(404).render(__dirname +  '/../views/404');
})
router.get('/loading.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/css/', 'loading.css'));
})
router.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/css/', 'style.css'));
})
router.get('/footer.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/css/', 'footer.css'));
})

module.exports = router;
