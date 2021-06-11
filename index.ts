// import express from 'express';

// const app = express();

// app.get('/', (req, res) => {
//     res.send('Well done!');
// })

// app.listen(3000, () => {
//     console.log('The application is listening on port 3000!');
// })

import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});