const checkData = require("./checkData");

const responses = {
  // 2**
  created: function (data) {
    this.status(201);
    checkData(this, data);
  },

  // 4**
  badRequest: function (data) {
    this.status(400);
    checkData(this, data);
  }, // 400
  unauthorized: function (data) {
    this.status(401);
    checkData(this, data);
  }, // 401
  forbidden: function (data) {
    this.status(403);
    checkData(this, data);
  }, // 403
  notFound: function (data) {
    this.status(404);
    checkData(this, data);
  }, // 404
  conflict: function (data) {
    this.status(409);
    checkData(this, data);
  }, // 409
  invalidToken: function (data) {
    this.status(498);
    checkData(this, data);
  },

  // 5**
  serverError: function (data) {
    this.status(500);
    checkData(this, data);
  },
  badGateway: function (data) {
    this.status(502);
    checkData(this, data);
  },
  serviceUnavailable: function (data) {
    this.status(503);
    checkData(this, data);
  },
};

module.exports = responses;
