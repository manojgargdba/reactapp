const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';

  db.query(sql, [name, email], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error saving data' });
      return;
    }
    res.json({ message: 'Data saved successfully!' });
  });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
