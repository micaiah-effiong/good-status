import { Response } from "express";

/*
 * {Object} res
 * [Object | String] data
 * return res
 */
const checkExtraData = (
  res: Response,
  data: any
): Response<any, Record<string, any>> => {
  if (res.goodStatus.config.send) {
    if (typeof data === "object") {
      return res.json(data);
    }
    return res.send(data);
  }

  return res;
};
export default checkExtraData;
