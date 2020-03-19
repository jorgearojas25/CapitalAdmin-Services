const cool = require('cool-ascii-faces');
const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require('cors');
const bodyParser = require("body-parser");
const router = require("./network/routes");
const db = require("./db");
const config = require("./config");

console.log(`mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}`)

db(`mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

router(app);

app.use(`${config.publicRoute}`, express.static('public'));

app.get("/cool",(req, res)=>{res.send(cool())})

server.listen(config.port, () => {
  console.log(`la app esta funcionando en ${config.host}:${config.port}`);
});

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//nodemon server
