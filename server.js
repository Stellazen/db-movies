const http = require('http');

http.createServer(function (request, response) {  
// Send HTTP headers and body with status 200 (meaning success)  
response.writeHead(200, {'Content-Type': 'text/html'});  
response.end(`<html>
<body>      
<h1>Hello, world!</h1>      
You asked for: ${request.url}    
</body&gt;</html>`);}).listen(1234);