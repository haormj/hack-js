import http from 'http';

console.log('http listen on 8889');
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>hello world</h1>');
}).listen('8889', '0.0.0.0');
