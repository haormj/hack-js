import http from 'http';

http.get('http://nodejs.org/dist/index.json', (rsp) => {
    console.log(rsp);
})
