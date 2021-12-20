const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//Connect Database
connectDB();

// cors
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'x-auth-token'],
  })
);

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/register', require('./routes/auth/register'));
app.use('/login', require('./routes/auth/auth'));
app.use('/tweet', require('./routes/tweet'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
