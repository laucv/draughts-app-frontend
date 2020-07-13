const express = require('express');
const http = require('http');
const path = require('path');
const mime = require('mime');
const app = express();
const server = http.createServer(app);

const setHeadersOnStatic = (res, path, stat) => {
  const type = mime.getType(path);
  res.set('content-type', type);
}

const staticOptions = {
  setHeaders: setHeadersOnStatic
}

app.use(express.static(path.join(__dirname, './dist/draughts'), staticOptions));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './dist/draughts/index.html')));


server.listen(process.env.PORT || 8081, () => {
  if (!process.env.PORT) {
    console.log('Running with Express... http://localhost:8081/');
  }
});