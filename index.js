const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    r = '';
    const testFolder = './';
    const fs = require('fs');

    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        r += file;
      });
    });
    response.end(r);
});

const port = process.env.PORT || 1098;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
