// Socket
const io = require('socket.io')(8001, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

// Socket.io Connection
io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('custom-event', (obj) => {
    console.log(obj);
  });
});
