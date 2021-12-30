// Socket
const io = require('socket.io')(8001, {
  cors: {
    origin: ['http://localhost:3000', 'https://tweeter-c.herokuapp.com/'],
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'x-auth-token'],
  },
});

// Socket.io Connection
io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('create-tweet', (tweet) => {
    io.emit('receive-tweet',tweet);
    console.log(tweet);
  });
});
