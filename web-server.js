const http = require('http');

http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>Hello World.js</title>');
    response.write('<meta charset="utf-8" />');
    response.write('</head>');
    response.write('<body><h2>Hello World</h2></body>');
    response.write('</html>');
    response.end();
}).listen(3000);

