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
  return function (_: Request, res: Response, next: NextFunction) {
    res.goodStatus = Object.assign({ config }, res);

    let attach: Response;
    if (config.extend) {
      attach = res;
    } else {
      attach = res.goodStatus;
    }

    // add methods to response object
    setStatusHandler(attach, status.official, res);

    // check and add unofficial status codes
    if (config.unofficial) {
      setStatusHandler(attach, status.unofficial, res);
    }

    if (config.infoService) {
      setStatusHandler(attach, status.infoService, res);
    }

    if (config.nginx) {
      setStatusHandler(attach, status.nginx, res);
    }

    if (config.cloudflare) {
      setStatusHandler(attach, status.cloudflare, res);
    }

    return next();
  };
}

export default init;
