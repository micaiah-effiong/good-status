const checkData = require("./checkData");

/*
 * attach function to an object and bind it to response
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
 * @param {Number} code - a status code number
 * @return {Function}
 * @private
 */
exports.getCodeFn = function (code) {
  /*
   *set status code and send data is available
   * @param {any} data - user defined value
   */
  return function (data) {
    this.status(code);
    return checkData(this, data);
  };
};
