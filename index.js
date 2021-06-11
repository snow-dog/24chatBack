"use strict";
// import express from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Well done!');
// })
// app.listen(3000, () => {
//     console.log('The application is listening on port 3000!');
// })
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var app = express_1.default();
var server = http_1.default.createServer(app);
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});
server.listen(3000, function () {
    console.log('listening on *:3000');
});
