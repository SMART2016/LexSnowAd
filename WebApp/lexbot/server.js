var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');


http.createServer(onRequest).listen(7000);

function onRequest(request, response){
pathName =url.parse(request.url).pathname;
console.log(url)
file = pathName.substr(1)
console.log(pathName)
fs.readFile(file, function(err, data){
if(err){
   response.writeHead(404, {'Content-type':'text/plan'});
   response.write('Page Was Not Found'+ JSON.stringify(err));
   response.end( );
}else
  // response.writeHead(200, {'Content-type':'text/plan'});
   response.write(data);
   response.end();

})
}