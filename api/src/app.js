const express = require("express"),
  app = express(),
  routes = require("./routes/index");

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Test works!");
});

app.listen(port, () =>
  console.log(`Server listens http://:${port}`)
);
