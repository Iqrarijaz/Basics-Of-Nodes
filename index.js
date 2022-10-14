const express = require("express");
var morgan = require("morgan");
const fs = require("fs");
const { functions } = require("lodash");
const app = express();
const port = 8080;

fs.readFile("./package.json", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

// Create a new directory
if (!fs.existsSync(".src")){
    fs.mkdir("./src", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("creating directory ");
  }
});
}
else {
    
}
// app.use((req, res, next) => {
//   console.log(`port: ${port}`);
//   console.log(`host: ${req.hostname}`);
//   console.log(`path: ${req.path}`);
//   console.log(`method: ${req.method}`);
//   next();
// });
app.use(morgan("dev"));


app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
