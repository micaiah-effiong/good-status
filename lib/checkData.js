const checkExtraData = (res, data) => {
  if (!data) {
    return res.end();
  }
  return res.json(data);
};

module.exports = checkExtraData;
