const express = require("express"),
  app = express(),
  routes = require("./routes/index");

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Test works!");
});

app.listen(port, () =>
  console.log(`Server listens http://:${port}`)
);
