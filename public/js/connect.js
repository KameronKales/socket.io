 var socket = io();

 socket.on('connect', function() {
     console.log('User connected to the server');
 });

 socket.on('disconnect', function() {
     console.log('User disconnected from the server');
 });
