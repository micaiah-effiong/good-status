const status = require("./responses");
const { setStatusHandler } = require("./utils");

/*
 * @param {Object} config - middlware configuration object
 * @return {Function} - middlware
 * @public
 */
function init(config) {
  // create configuration object if not passed in
  config = config || {};

  if (Array.isArray(config) || typeof config !== "object") {
    throw new Error("config must be an object");
  }

  if (!config.send) {
    config.send = true;
  }

  // TODO: checking config.statusAttribute for string type
  if (!config.statusAttribute || typeof config.statusAttribute !== "string") {
    config.extend = false;
  } else {
    config.extend = true;
  }

  const goodStatus = Object.create(null); // create gs object
  goodStatus.config = config; // add user config

  return function (req, res, next) {
    res.goodStatus = goodStatus; // add gs to response

    let attach;
    if (res.goodStatus.config.extend) {
      attach = res[res.goodStatus.config.statusAttribute] = Object.create(null);
    } else {
      attach = res;
    }

    // add methods to response object
    setStatusHandler(attach, status.official, res);

    // check and add unofficial status codes
    if (res.goodStatus.config.unofficial) {
      setStatusHandler(attach, status.unofficial, res);
    }

    if (res.goodStatus.config.infoService) {
      setStatusHandler(attach, status.infoService, res);
    }

    if (res.goodStatus.config.nginx) {
      setStatusHandler(attach, status.nginx, res);
    }

    if (res.goodStatus.config.cloudflare) {
      setStatusHandler(attach, status.cloudflare, res);
    }

    return next();
  };
}
module.exports = init;
