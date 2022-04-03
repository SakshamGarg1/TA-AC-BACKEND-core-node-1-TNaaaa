var http = require('http');


var server = http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req.method);
    res.writeHead(201,{'Content-Type' : 'text/html'});
    res.write('<h1>hello</h1>');
    res.write('<h1>Saksham</h1>');


    res.end();
}


 server.listen(4444,()=>{
     console.log('altCmapus')
 })

