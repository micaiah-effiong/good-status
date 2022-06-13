import { Response } from "express";
import { GoodStatusResponse, Responses } from "../types";

/**
 * @param {any} statusObj - collection of status code handlers
 * @param {any} statusHandler - handler object for status codes
 * @param {Response} res - HTTP response object
 * @private
 */
export function setStatusHandler(
  statusObj: Record<string, (data?: any) => Response>,
  statusHandler:
    | Responses.Official
    | Responses.Unofficial
    | Responses.InfoService
    | Responses.Nginx
    | Responses.Cloudflare,
  res: Response
) {
  Object.keys(statusHandler).forEach((key: string) => {
    const resFunction: GoodStatusResponse = statusHandler[key];
    statusObj[key] = resFunction.bind(res);
  });
}

export function getCodeFn(code: number) {
  return function (
    this: Response<any, Record<string, any>>,
    data?: any
  ): Response<any, Record<string, any>> {
    this.status(code);
    const res = checkData(this, data);
    return res;
  };
}

function checkData(
  res: Response,
  data: any
): Response<any, Record<string, any>> {
  if (res.goodStatus.config.send) {
    if (typeof data === "object") {
      return res.json(data);
    }
    return res.send(data);
  }

  return res;
}
