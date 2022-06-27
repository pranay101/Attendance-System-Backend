const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

// import configs
const config = require("./Server/Config/ServerConfig");

// Initializing the application
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// import routes
const AuthRouter = require("./Server/Routes/Authentication/Authenticaion");

// Routes
app.use("/api/v1/auth", AuthRouter);

app.get("/", (request, response) => {
  response.status(200).send("Attendance System Home Route");
});

//custom 404 page/
app.use(function (req, res) {
  res.type("application/json");
  res.status(404);
  res.send({ success: false, message: "404 Route Not Found", data: null });
});

// custom server Error
app.use(function (err, req, res, next) {
  res.type("application/json");
  res.status(500);
  res.json({ success: false, message: "500 Server Error", data: err.stack });
  next(err);
});

const server = app.listen(
  config.PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${config.PORT} `
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
