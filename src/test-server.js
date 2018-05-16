import http from 'http';

var process;
const port = process.env.PORT || 4001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello React Class \n');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}.`);
});