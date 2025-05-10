const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Connected to: ${process.env.DATABASE_URL}`);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

