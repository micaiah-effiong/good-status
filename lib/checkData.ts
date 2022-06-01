/*
 * {Object} res
 * [Object | String] data
 * return res
 */
const checkExtraData = (res, data) => {
  if (res.goodStatus.config.send) {
    if (typeof data === "object") {
      return res.json(data);
    }
    return res.end(data);
  }

  return res;
};

module.exports = checkExtraData;
