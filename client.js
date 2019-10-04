var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});

socket.emit('chat message', 'hi how are you', (msg)=>{
    console.log(msg);
});

socket.emit('send message', 'hi how are you', (msg)=>{
    console.log(msg);
});

socket.on('receive message', (msg)=>{
    console.log(msg);
});