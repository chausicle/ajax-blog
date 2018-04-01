const express = require("express");
      app = express();
      cors = require("cors");
      bodyParser = require("body-parser");
      morgan = require("morgan");
      PORT = process.env.PORT || 3000;
      path = require("path");

app.use(cors());
app.use(bodyParser.json());
app.disable("x-powered-by");
if (process.env.NODE_ENV !== "test") app.use(morgan("dev"));

// Serve static files
app.use('/', express.static("../ajax-blog-frontend"));

const postPath = require("./src/routes/posts");
app.use("/posts", postPath);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err });
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

const listener = console.log(`Server start on port ${PORT}`);
app.listen(PORT, listener);

module.exports = app;
