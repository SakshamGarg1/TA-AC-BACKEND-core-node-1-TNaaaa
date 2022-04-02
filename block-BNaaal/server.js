// writeCode

// create a basic node server using http module's createServer method and add a listener on port 4000.
// start the server using script writer i.e. node script_file.js
// open the browser and request your server on url http://localhost:4000.
// notice the output in browser and terminal.

var http = require('http');

var server =http.createServer(handleRequest);

function handleRequest(req,res){
    res.end('welcome to the jungle');

}

server.listen(4000,() =>{
    console.log('server has to be fine')
})