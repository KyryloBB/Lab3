const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Server is listening ${port} port`);
});
