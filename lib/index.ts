import { NextFunction, Request, Response } from "express";
import * as status from "./responses";
import { Options } from "../types";
import { setStatusHandler } from "./utils";

/**
 * @param {Options} config - middlware configuration object
 * @return {Function} - middlware
 * @public
 */
function init(config: Options = {}) {
  const goodStatus = Object.create(null);
  goodStatus.config = config;

  return function (_: Request, res: Response, next: NextFunction) {
    res.goodStatus = goodStatus;

    let attach: any;
    if (res.goodStatus.config.extend) {
      attach = res;
    } else {
      attach = res.goodStatus;
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

export default init;
