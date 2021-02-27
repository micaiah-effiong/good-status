const express = require("express");
const app = express();

// import api responses
const apiResponses = require("../index");

// add middleware
app.use(apiResponses());

app.all("/created", (req, res) => {
  res.created();
});

app.all("/badRequest", (req, res) => {
  res.badRequest();
});

app.all("/unauthorized", (req, res) => {
  res.unauthorized();
});

app.all("/forbidden", (req, res) => {
  res.forbidden();
});

app.all("/notFound", (req, res) => {
  res.notFound();
});

app.all("/conflict", (req, res) => {
  res.conflict();
});

app.all("/invalidToken", (req, res) => {
  res.invalidToken();
});

app.all("/serverError", (req, res) => {
  res.serverError();
});

app.all("/badGateway", (req, res) => {
  res.badGateway();
});

app.all("/serviceUnavailable", (req, res) => {
  res.serviceUnavailable();
});

// app.listen(process.env.PORT || 3000);

module.exports = app;
