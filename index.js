const response = require("./lib/responses");

const init = (config) => {
  return (req, res, next) => {
    res._simpleSend = config.send || false;
    // add methods to response object
    Object.keys(response).forEach((key) => {
      const value = response[key];
      res[key] = value.bind(res);
    });
    next();
  };
};
module.exports = init;
