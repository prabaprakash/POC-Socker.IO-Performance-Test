const server = require('http').createServer();
const io = require('socket.io')(server);


io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('send message', function (msg) {
    console.log('Socket (server-side): send message:', msg);
    io.emit('receive message', "pong");
  });
  socket.on('chat message', function (data, callback) {
    console.log('Socket (server-side): chat message:', data);
    var responseData = {
      string1: 'I like ',
      string2: 'bananas',
      string3: ' dude!'
    };
    callback(responseData);
  });
});



server.listen(3000, function () {
  console.log('socket listening on *:3000');
});