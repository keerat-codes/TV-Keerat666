const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8009;

require('dotenv').config();

const TV-ShowsRoute = require('./routes/TV-Shows');
const retro  = require('./controllers/retro');
app.use('/retro', retro);
app.use('/TV-Shows', TV-ShowsRoute);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const conn = require('./middlewares/connection');
console.log("Trying to establish a connection to TiDB...");

if (conn) {
  console.log("Connection to TiDB successful");
} else {
  console.log("Connection to TiDB failed");
}


//Please don't delete this health API
app.use('/api/health', (req, res) => {
    res.send('Hello Autopilot');
  });

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;