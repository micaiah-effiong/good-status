const response = require("./lib/responses");

const init = (config) => {
  return (req, res, next) => {
    // create configuration object if its no passed in
    if (!config) {
      config = {};
    }

    if (config.send === undefined) {
      config.send = true;
    }
    res._simpleSend = config.send;

    // add methods to response object
    Object.keys(response).forEach((key) => {
      const value = response[key];
      res[key] = value.bind(res);
    });
    next();
  };
};
module.exports = init;
