const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const apiRouter = require("./api");
const { client } = require("./db");

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(morgan("dev"));
server.use("/api", apiRouter);

client.connect();
const PORT = 3001;
// server.use((req, res, next) => {
//   console.log("<____Body Logger START____>");
//   console.log(req.body);
//   console.log("<_____Body Logger END_____>");

//   next();
// });

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
