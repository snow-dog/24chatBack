// import { createServer } from 'http'
// import { Server } from 'socket.io'
import express from 'express'

const App = () => {
  const port = 3000
  
  const app = express()
  app.set("port", process.env.PORT || 3000)

  const http = require("http").Server(app)

  // simple '/' endpoint sending a Hello World
  // response
  app.get("/", (req: any, res: any) => {
    res.send("hello world!!")
  })
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  })

  // start our simple server up on localhost:3000
  // const server = http.listen(port, function() {
  //   console.log(`listening on *: ${port}`);
  // })
}

App()