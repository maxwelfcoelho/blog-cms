const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const routes = [
    require("./routes/user.route"),
    require("./routes/post.route")
];

class Server {
    constructor() {
        this.app = express();

        this.initConfig();
        this.initRoutes();
    }

    initConfig() {
        this.app.use(cors());
        this.app.use(cookieParser());
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