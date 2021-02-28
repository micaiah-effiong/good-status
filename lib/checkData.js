/*
 * {Object} res
 * [Object | String] data
 * return res
 */
const checkExtraData = (res, data) => {
  if (res._simpleSend) {
    if (typeof data === "object") {
      return res.json(data);
    } else {
      return res.end(data);
    }
  }

  return res;
};

module.exports = checkExtraData;
