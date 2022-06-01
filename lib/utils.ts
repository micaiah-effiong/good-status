const checkData = require("./checkData");

/*
 * @param {Object} statusObj - collection of status code handles
 * @param {Object} statusHandler - handler object for status codes
 * @param {Object} res - HTTP response object
 * @private
 */
exports.setStatusHandler = function (statusObj, statusHandler, res) {
  Object.keys(statusHandler).forEach((key) => {
    const resFunction = statusHandler[key];
    statusObj[key] = resFunction.bind(res);
  });
};

/*
 * @param {any} data - user defined value
 * @param {Number} code - a status code number
 * @return {Function}
 * @private
 */
exports.getCodeFn = function (code, data) {
  return function (data) {
    this.status(code);
    return checkData(this, data);
  };
};
