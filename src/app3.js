var http  = require('http')
var maths = require('./app.js')

console.log(maths.add(2,3));

http.createServer(function(req, res) {
    res.setHeader("200", {'Content-Type': 'text/html'})
    res.write("preparing flight number : "+maths.add(5,7));
    // res.write();
    res.end();
}).listen(8080);