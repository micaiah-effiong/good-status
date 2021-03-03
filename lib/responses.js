const checkData = require("./checkData");
const STATUS = require("./status-codes");

const responses = {
  // 2**
  ok: function (data) {
    this.status(STATUS.HTTP_OK);
    return checkData(this, data);
  },
  created: function (data) {
    this.status(STATUS.HTTP_CREATED);
    return checkData(this, data);
  },

  // 4**
  badRequest: function (data) {
    this.status(STATUS.HTTP_BAD_REQUEST);
    return checkData(this, data);
  }, // 400
  unauthorized: function (data) {
    this.status(STATUS.HTTP_UNAUTHORIZED);
    return checkData(this, data);
  }, // 401
  forbidden: function (data) {
    this.status(STATUS.HTTP_FORBIDDEN);
    return checkData(this, data);
  }, // 403
  notFound: function (data) {
    this.status(STATUS.HTTP_NOT_FOUND);
    return checkData(this, data);
  }, // 404
  conflict: function (data) {
    this.status(STATUS.HTTP_CONFILCT);
    return checkData(this, data);
  }, // 409
  invalidToken: function (data) {
    this.status(498);
    return checkData(this, data);
  },

  // 5**
  serverError: function (data) {
    this.status(STATUS.HTTP_INTERNAL_SERVER_ERROR);
    return checkData(this, data);
  },
  badGateway: function (data) {
    this.status(STATUS.HTTP_BAD_GETEWAY);
    return checkData(this, data);
  },
  serviceUnavailable: function (data) {
    this.status(STATUS.HTTP_SERVICE_UNAVAILABLE);
    return checkData(this, data);
  },
};

module.exports = responses;
