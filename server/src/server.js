const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-it4x2.mongodb.net/oministack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333, () => {
	console.log('Server is runnning in http://localhost:3333');
}); 