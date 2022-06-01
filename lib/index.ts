import { NextFunction, Request, Response } from "express";
import * as status from "./responses";
import goodStatus, { Options } from "../types";
import { setStatusHandler } from "./utils";

/**
 * @param {Options} config - middlware configuration object
 * @return {Function} - middlware
 * @public
 */
function init<T>(config: Options = {}) {
  if (Array.isArray(config) || typeof config !== "object") {
    throw new Error("config must be an object");
  }

  if (!config.send) {
    config.send = true;
  }

  if (!config.statusAttribute || typeof config.statusAttribute !== "string") {
    config.extend = false;
  } else {
    config.extend = true;
  }

  const goodStatus = Object.create(null); // create gs object
  goodStatus.config = config; // add user config

  return function (_: Request, res: Response, next: NextFunction) {
    res.goodStatus = goodStatus; // add gs to response

    let attach: any;
    if (res.goodStatus.config.extend && res.goodStatus.config.statusAttribute) {
      const statusAttribute = res.goodStatus.config.statusAttribute;
      attach = res[statusAttribute] = Object.create(null);
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

export default init;
