var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 9090 });
var express = require('express');
var app = express();

// Start REST server on port 8081
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Websocket event broadcaster REST API listening on http://%s:%s", host, port)
});


app.get('/events', function (req, res) {
   console.log('Event');
   wss.clients.forEach(function each(client) {
      client.send("broadcast:" + "TODO");
    });
   res.sendStatus(200);
});



