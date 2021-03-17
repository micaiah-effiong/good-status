const status = require("./responses");

function addStatusHandler(res, statusCodesHandlers) {
  Object.keys(statusCodesHandlers).forEach((key) => {
    const resFunction = statusCodesHandlers[key];
    res[key] = resFunction.bind(res);
  });
}

const init = (config) => {
  return (req, res, next) => {
    // create configuration object if its no passed in
    config = config || {};

    if (config.send === undefined) {
      config.send = true;
    }

    var goodStatus = Object.create(null); // create gs object
    goodStatus.config = config; // add user config
    res.goodStatus = goodStatus; // add gs to response

    // add methods to response object
    addStatusHandler(res, status.official);

    // check and add unofficial status codes
    if (res.goodStatus.config.unofficial) {
      addStatusHandler(res, status.unofficial);
    }

    return next();
  };
};
module.exports = init;
