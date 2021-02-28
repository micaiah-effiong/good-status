const express = require("express");
const app = express();

// import api responses
const goodStatus = require("../index");

// add middleware
app.use(express.json());
app.use(goodStatus());

app.get("/ok", (req, res) => {
  res.ok();
});

app.post("/created", (req, res) => {
  res.created({
    status: "success",
    data: req.body,
  });
});

app.post("/badRequest", (req, res) => {
  res.badRequest({
    status: "failed",
    data: req.body,
  });
});

app.get("/unauthorized", goodStatus({ send: false }), (req, res) => {
  res.unauthorized().json({ msg: "require authentication" });
});

app.get("/forbidden", (req, res) => {
  res.forbidden();
});

app.get("/notFound", (req, res) => {
  res.notFound();
});

app.post("/conflict", (req, res) => {
  res.conflict({
    status: "failed",
    data: req.body,
  });
});

app.get("/invalidToken", (req, res) => {
  res.invalidToken();
});

app.post("/serverError", (req, res) => {
  res.serverError({
    status: "failed",
    data: req.body,
  });
});

app.post("/badGateway", (req, res) => {
  res.badGateway({
    status: "failed",
    data: req.body,
  });
});

app.get("/serviceUnavailable", (req, res) => {
  res.serviceUnavailable();
});

// app.listen(process.env.PORT || 3000);

module.exports = app;
