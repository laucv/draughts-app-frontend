const PATH_PROJECT = '/dist/draughts';
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + PATH_PROJECT));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, PATH_PROJECT, index.html)));
app.get('/welcome', (req, res) => res.sendFile(path.join(__dirname, PATH_PROJECT, index.html)));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, PATH_PROJECT, index.html)));
app.get('/playGame', (req, res) => res.sendFile(path.join(__dirname, PATH_PROJECT, index.html)));
app.get('/profile', (req, res) => res.sendFile(path.join(__dirname, PATH_PROJECT, index.html)));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, PATH_PROJECT, index.html)));

server.listen(process.env.PORT || 8081, () => {
  if (!process.env.PORT) {
    console.log('Running with Express... http://localhost:8081/');
  }
});