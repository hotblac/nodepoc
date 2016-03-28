var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 9090 });

wss.on('connection', function connection(ws) {
  setTimeout(function() {
    ws.send('hello');
    console.log('sent hello');
  }, 5000 );

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
