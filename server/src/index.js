require('dotenv').config()

const Server = require("./server");

const PORT = 4000;

new Server().start(PORT);