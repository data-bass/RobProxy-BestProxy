require('newrelic');
const express = require('express');
const path = require('path');

var server = express();

//Albums & Player
server.get('/artists/albums/:artistID', (req, res) => {
  res.redirect('http://18.188.226.149:3001' + req.url);
});

// Related Artists
server.get('/artist/:id/relatedArtists', (req, res) => {
  res.redirect('http://18.223.162.121' + req.url);
});

// Popular Songs
server.get('/artist/:id', (req, res) => {
  res.redirect('http://13.56.80.227:3003' + req.url);
});

// Header
server.get('/artists/header/:artistID', (req, res) => {
   res.redirect('http://54.67.58.69' + req.url);
});

server.post('/artists/header/:artistID', (req, res) => {
  res.redirect('http://54.67.58.69' + req.url);
});

server.get('*', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});


server.listen(3000, console.log('Listening on:', 3000));