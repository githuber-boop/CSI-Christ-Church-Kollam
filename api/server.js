// server.js
const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const apiServer = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults();

// Serve React build
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Use JSON Server as middleware
app.use('/api', middlewares, router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
