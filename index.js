const http = require('http');
const path = require('path');
const filePath = path.join(__dirname, 'data.dt');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    r = 'and the data is: ';
    const fs = require('fs');

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            r += data
        } else {
            r += (err);
        }
        response.end(r);
    });
    
    
});

const port = process.env.PORT || 1098;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
