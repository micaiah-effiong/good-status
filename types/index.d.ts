import { Request, Response, NextFunction } from "express";
import { NextHandleFunction } from "connect";

declare global {
  namespace GoodStatus {
    interface Config extends goodStatus.Options {}
  }
  namespace Express {
    interface Response
      extends Responses.Official,
        Responses.Unofficial,
        Responses.Cloudflare,
        Responses.InfoService,
        Responses.Nginx {
      goodStatus: {
        config: GoodStatus.Config;
      } & Response;
    }
  }
}

declare module goodStatus {
  interface Options {
    /**
     * @description Specify if the status function should send/end response to the client
     * If it true the status functions will act as express send function
     * by default this option is false
     * @example
     * // send = true
     * res.created("Hi")
     * // send = false
     * res.created().send("Hi")
     * @default false
     */
    send?: boolean;

    /**
     * @description when true all good-status function will be populated to
     * the response
     * by default this option is false
     * @example
     * // extend = true
     * res.notFound();
     * // extend = false
     * res.goodStatus.notFound();
     * @default false
     */
    extend?: boolean;
    unofficial?: boolean;
    infoService?: boolean;
    nginx?: boolean;
    cloudflare?: boolean;
  }
}

declare function goodStatus<T>(
  options?: goodStatus.Options<T>
): NextHandleFunction;

export = goodStatus;

export type GoodStatusResponse = (data?: any) => Response;
export namespace Responses {
  interface Official extends Record<string, GoodStatusResponse> {
    ok: GoodStatusResponse;
    created: GoodStatusResponse;
    accepted: GoodStatusResponse;
    nonAuthoritativeInformation: GoodStatusResponse;
    noContent: GoodStatusResponse;
    resetContent: GoodStatusResponse;
    partialContent: GoodStatusResponse;
    mulitStatus: GoodStatusResponse;
    alreadyReported: GoodStatusResponse;
    imUsed: GoodStatusResponse;

    multipleChoices: GoodStatusResponse;
    movedPermanently: GoodStatusResponse;
    found: GoodStatusResponse;
    seeOther: GoodStatusResponse;
    notModified: GoodStatusResponse;
    useProxy: GoodStatusResponse;
    unused: GoodStatusResponse;
    temporaryRedirect: GoodStatusResponse;
    permanentRedirect: GoodStatusResponse;

    badRequest: GoodStatusResponse;
    unauthorized: GoodStatusResponse;
    paymentRequired: GoodStatusResponse;
    forbidden: GoodStatusResponse;
    notFound: GoodStatusResponse;
    methodNotAllowed: GoodStatusResponse;
    notAcceptable: GoodStatusResponse;
    proxyAuthenticationRequired: GoodStatusResponse;
    requestTimeout: GoodStatusResponse;
    conflict: GoodStatusResponse;
    gone: GoodStatusResponse;
    lengthRequired: GoodStatusResponse;
    preconditionFailed: GoodStatusResponse;
    payloadTooLarge: GoodStatusResponse;
    uriTooLong: GoodStatusResponse;
    unsupportedMediaType: GoodStatusResponse;
    rangeNotSatisfiable: GoodStatusResponse;
    expectationFailed: GoodStatusResponse;
    iAmATeapot: GoodStatusResponse;
    misdirectedRequest: GoodStatusResponse;
    unprocessableEntity: GoodStatusResponse;
    locked: GoodStatusResponse;
    failedDependency: GoodStatusResponse;
    tooEarly: GoodStatusResponse;
    upgradeRequired: GoodStatusResponse;
    preconditionRequired: GoodStatusResponse;
    tooManyRequests: GoodStatusResponse;
    requestHeaderFieldsTooLarge: GoodStatusResponse;
    unavailableForLegalReasons: GoodStatusResponse;

    internalServerError: GoodStatusResponse;
    notImplemented: GoodStatusResponse;
    badGateway: GoodStatusResponse;
    serviceUnavailable: GoodStatusResponse;
    gatewayTimeout: GoodStatusResponse;
    httpVersionNotSupported: GoodStatusResponse;
    variantAlsoNegotiates: GoodStatusResponse;
    insufficientStorage: GoodStatusResponse;
    loopDetected: GoodStatusResponse;
    notExtended: GoodStatusResponse;
    networkAuthenticationRequired: GoodStatusResponse;
  }

  interface Unofficial extends Record<string, GoodStatusResponse> {
    thisIsFine: GoodStatusResponse;
    pageExpired: GoodStatusResponse;
    enhanceYourCalm: GoodStatusResponse;
    uRequestHeaderFieldsTooLarge: GoodStatusResponse;
    blockedBywindowsParentalControls: GoodStatusResponse;
    invalidToken: GoodStatusResponse;
    tokenRequired: GoodStatusResponse;
    bandwidthLimitExceeded: GoodStatusResponse;
    invalidSSLCertificate: GoodStatusResponse;
    siteIsOverLoaded: GoodStatusResponse;
    siteIsFrozen: GoodStatusResponse;
    networkReadTimeoutError: GoodStatusResponse;
  }

  interface InfoService extends Record<string, GoodStatusResponse> {
    loginTimeout: GoodStatusResponse;
    retryWith: GoodStatusResponse;
    ifRedirect: GoodStatusResponse;
  }

  interface Nginx extends Record<string, GoodStatusResponse> {
    noResponse: GoodStatusResponse;
    headerTooLarge: GoodStatusResponse;
    sslCertError: GoodStatusResponse;
    sslCertRequired: GoodStatusResponse;
    sentToHttpsPort: GoodStatusResponse;
    clientClosedRequest: GoodStatusResponse;
  }

  interface Cloudflare extends Record<string, GoodStatusResponse> {
    webServerReturnedAnUnknownError: GoodStatusResponse;
    webServerIsDown: GoodStatusResponse;
    connectionTimedOut: GoodStatusResponse;
    originIsUnreachable: GoodStatusResponse;
    aTimeoutOccurred: GoodStatusResponse;
    sslHandshakeFailed: GoodStatusResponse;
    invalidSslCertificate: GoodStatusResponse;
    railgunError: GoodStatusResponse;
    notLoggedIn: GoodStatusResponse;
  }
}
