const express = require('express');
var fs = require('fs');
const app = express();

app.listen(8080, function(){
  console.log('listening on 8080');
});

app.get('/Park', function(req, res){
  res.sendFile(__dirname + '/Park.html');
});

app.get('/Gang', function(req, res){
  res.sendFile(__dirname + '/Zento.html');
});

app.get('/GangJ', function(req, res){
  res.send("내일 죽을 군인이다");
});

app.get('/Me', function(req, res){
  res.send("11월 21일에 죽을 군인이다");
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/imgZ',function(req, res){
  fs.readFile('img/RIP_Z.png',function(error, data){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end(data);
  });
});

app.get('/imgK',function(req, res){
  fs.readFile('img/RIP_K.png',function(error, data){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end(data);
  });
});

app.get('/imgG',function(req, res){
  fs.readFile('img/RIP_J.png',function(error, data){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end(data);
  });
});

app.get('/imgM',function(req, res){
  fs.readFile('img/RIP_P.png',function(error, data){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end(data);
  });
});