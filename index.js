"use strict";
exports.__esModule = true;
// import { createServer } from 'http'
// import { Server } from 'socket.io'
var express_1 = require("express");
var App = function () {
    var port = 3000;
    var app = express_1["default"]();
    app.set("port", process.env.PORT || 3000);
    var http = require("http").Server(app);
    // simple '/' endpoint sending a Hello World
    // response
    app.get("/", function (req, res) {
        res.send("hello world!!");
    });
    app.listen(port, function () {
        console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:" + port);
    });
    // start our simple server up on localhost:3000
    // const server = http.listen(port, function() {
    //   console.log(`listening on *: ${port}`);
    // })
};
App();
