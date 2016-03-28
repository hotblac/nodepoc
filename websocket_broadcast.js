var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 9090 });

wss.on('connection', function connection(ws) {

  // Create event listener
  ws.on('message', function(message) {

    wss.clients.forEach(function each(client) {
      client.send("broadcast:" + message);
    });

  });
});

