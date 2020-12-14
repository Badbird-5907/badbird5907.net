const express = require('express');
const https = require('https');
const fs = require('fs');

var css = require('./routes/css.js');
var js = require('./routes/js.js');
const hostname = 'badbird5907.net';
const httpsport = 6969;
const cert = fs.readFileSync('./cert/badbird5907_net.crt');
const ca = fs.readFileSync('./cert/badbird5907_net.ca-bundle');
const key = fs.readFileSync('./cert/badbird5907_net.key');

let httpsOptions = {
    cert: cert, // fs.readFileSync('./ssl/example.crt');
    ca: ca, // fs.readFileSync('./ssl/example.ca-bundle');
    key: key // fs.readFileSync('./ssl/example.key');
};

const app = express();
const httpsServer = https.createServer(httpsOptions, app);

app.set('view engine', 'ejs');
app.use('/css', css);
app.use('/js', js)
app.use('/search', require('./routes/search.js'))
app.use('/downloads', require('./routes/downloads.js'))


app.get('/', (req, res) => {
    res.render( 'index');
});
app.get('/test', (req, res) => {
    res.render( 'test');
});
app.get('/api/status', (req, res) => {
    res.status(200).send('200 OK');
});
app.get('/api/aetheriacore/version', (req, res) => {
    res.status(200).send('2.0');
});
app.get('/robots.txt', (req, res) => {
    res.sendFile(__dirname + '/views/robots.txt');
});
app.get('/nav.html', (req, res) => {
    res.sendFile(__dirname + '/views/nav.html');
});
app.get('/footer.html', (req, res) => {
    res.sendFile(__dirname + '/views/footer.html');
});
app.get('/logo.png', (req, res) => {
    res.sendFile(__dirname + '/views/logo.png');
});


// ------------------------------------------
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).render('404')
});
// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));
/*
const server = httpsServer.listen(httpsport, () => {
    console.log(`Web Server Running On Port http://localhost:${server.address().port}`);
});
 */
httpsServer.listen(httpsport, hostname)
