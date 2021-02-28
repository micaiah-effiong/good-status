const checkData = require("./checkData");

const responses = {
  // 2**
  ok: function (data) {
    this.status(200);
    return checkData(this, data);
  },
  created: function (data) {
    this.status(201);
    return checkData(this, data);
  },

  // 4**
  badRequest: function (data) {
    this.status(400);
    return checkData(this, data);
  }, // 400
  unauthorized: function (data) {
    this.status(401);
    return checkData(this, data);
  }, // 401
  forbidden: function (data) {
    this.status(403);
    return checkData(this, data);
  }, // 403
  notFound: function (data) {
    this.status(404);
    return checkData(this, data);
  }, // 404
  conflict: function (data) {
    this.status(409);
    return checkData(this, data);
  }, // 409
  invalidToken: function (data) {
    this.status(498);
    return checkData(this, data);
  },

  // 5**
  serverError: function (data) {
    this.status(500);
    return checkData(this, data);
  },
  badGateway: function (data) {
    this.status(502);
    return checkData(this, data);
  },
  serviceUnavailable: function (data) {
    this.status(503);
    return checkData(this, data);
  },
};

module.exports = responses;
