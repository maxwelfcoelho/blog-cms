const express = require("express");

const pool = require("./db");

const routes = [
    require("./routes/user.route")
];

class Server {
    constructor() {
        this.app = express();

        this.initConfig();
        this.initRoutes();
    }

    initConfig() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    initRoutes() {
        routes.forEach(route => {
            this.app.use(route);
        });
    }

    start(port) {
        this.app.listen(port);
    }
}

module.exports = Server;