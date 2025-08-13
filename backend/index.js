const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./src/routes/users');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the Neighborly backend!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
