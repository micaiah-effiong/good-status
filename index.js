const response = require("./lib/responses");

const init = () => {
  return (req, res, next) => {
    // add methods to response object
    Object.keys(response).forEach((key) => {
      const value = response[key];
      res[key] = value.bind(res);
    });
    next();
  };
};
module.exports = init;
