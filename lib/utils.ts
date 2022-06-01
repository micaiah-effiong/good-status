import { response, Response } from "express";
import goodStatus from "../types";
import checkData from "./checkData";

/**
 * @param {any} statusObj - collection of status code handlers
 * @param {any} statusHandler - handler object for status codes
 * @param {Response} res - HTTP response object
 * @private
 */
export function setStatusHandler(
  statusObj: Record<
    string,
    | GoodStatus.Responses.Official
    | GoodStatus.Responses.Unofficial
    | GoodStatus.Responses.InfoService
    | GoodStatus.Responses.Nginx
    | GoodStatus.Responses.Cloudflare
  >,
  statusHandler: any,
  res: Response
) {
  Object.keys(statusHandler).forEach((key: string) => {
    const resFunction = statusHandler[key];
    statusObj[key] = resFunction.bind(res);
  });
}

export function getCodeFn(
  code: number
): (data?: any) => Response<any, Record<string, any>> {
  return function (
    this: Response<any, Record<string, any>>,
    data?: any
  ): Response<any, Record<string, any>> {
    this.status(code);
    const res = checkData(this, data);
    return res;
  };
}
