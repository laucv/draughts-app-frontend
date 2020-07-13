const express = require('express');
const http = require('http');
const path = require('path');
const mime = require('mime');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

const setHeadersOnStatic = (res, path, stat) => {
  const type = mime.getType(path);
  res.set('content-type', type);
}

const staticOptions = {
  setHeaders: setHeadersOnStatic
}

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.static(path.join(__dirname, './dist/draughts'), staticOptions));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './dist/draughts/index.html')));


server.listen(process.env.PORT || 8081, () => {
  if (!process.env.PORT) {
    console.log('Running with Express... http://localhost:8081/');
  }
});