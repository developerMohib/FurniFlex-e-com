const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;

// middle-wares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Furni Flex e-com web app server is running')
})

app.listen(port, () => {
  console.log(`Furni Flex web app listening on port ${port}`)
})