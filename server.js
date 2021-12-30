const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

//Socket io
// require('./socket');

const app = express();

//Connect Database
connectDB();

// cors
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://tweeter-c.herokuapp.com/'],
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'x-auth-token'],
  })
);

//Init Middleware
app.use(express.json({ extended: false }));

app.use('/register', require('./routes/auth/register'));
app.use('/login', require('./routes/auth/auth'));
app.use('/tweet', require('./routes/tweet'));
app.use('/news', require('./routes/news'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
