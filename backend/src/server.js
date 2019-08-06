const express = require('express');

const server = express();

// GET, POST, PUT, DELETE
server.get('/', (req, res) => {
    return res.json({ message: `Hello Bacon ${req.query.name}`});
});

server.listen(3333);
