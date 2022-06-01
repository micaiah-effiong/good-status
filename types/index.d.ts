import { Request, Response, NextFunction } from "express";
import { NextHandleFunction } from "connect";
declare global {
  namespace GoodStatus {
    interface Config extends goodStatus.Options {}
    namespace Responses {
      type ResponseName =
        | "ok"
        | "created"
        | "accepted"
        | "nonAuthoritativeInformation"
        | "noContent"
        | "resetContent"
        | "partialContent"
        | "mulitStatus"
        | "alreadyReported"
        | "imUsed"
        | "multipleChoices"
        | "movedPermanently"
        | "found"
        | "seeOther"
        | "notModified"
        | "useProxy"
        | "unused"
        | "temporaryRedirect"
        | "permanentRedirect"
        | "badRequest"
        | "unauthorized"
        | "paymentRequired"
        | "forbidden"
        | "notFound"
        | "methodNotAllowed"
        | "notAcceptable"
        | "proxyAuthenticationRequired"
        | "requestTimeout"
        | "conflict"
        | "gone"
        | "lengthRequired"
        | "preconditionFailed"
        | "payloadTooLarge"
        | "uriTooLong"
        | "unsupportedMediaType"
        | "rangeNotSatisfiable"
        | "expectationFailed"
        | "iAmATeapot"
        | "misdirectedRequest"
        | "unprocessableEntity"
        | "locked"
        | "failedDependency"
        | "tooEarly"
        | "upgradeRequired"
        | "preconditionRequired"
        | "tooManyRequests"
        | "requestHeaderFieldsTooLarge"
        | "unavailableForLegalReasons"
        | "internalServerError"
        | "notImplemented"
        | "badGateway"
        | "serviceUnavailable"
        | "gatewayTimeout"
        | "httpVersionNotSupported"
        | "variantAlsoNegotiates"
        | "insufficientStorage"
        | "loopDetected"
        | "notExtended"
        | "networkAuthenticationRequired"
        | "thisIsFine"
        | "pageExpired"
        | "enhanceYourCalm"
        | "uRequestHeaderFieldsTooLarge"
        | "blockedBywindowsParentalControls"
        | "invalidToken"
        | "tokenRequired"
        | "bandwidthLimitExceeded"
        | "invalidSSLCertificate"
        | "siteIsOverLoaded"
        | "siteIsFrozen"
        | "networkReadTimeoutError"
        | "loginTimeout"
        | "retryWith"
        | "noResponse"
        | "headerTooLarge"
        | "sslCertError"
        | "sslCertRequired"
        | "sentToHttpsPort"
        | "clientClosedRequest"
        | "webServerReturnedAnUnknownError"
        | "webServerIsDown"
        | "connectionTimedOut"
        | "originIsUnreachable"
        | "aTimeoutOccurred"
        | "sslHandshakeFailed"
        | "invalidSslCertificate"
        | "railgunError"
        | "notLoggedIn";

      interface Official {
        ok(data?: any): Response;
        created(data?: any): Response;
        accepted(data?: any): Response;
        nonAuthoritativeInformation(data?: any): Response;
        noContent(data?: any): Response;
        resetContent(data?: any): Response;
        partialContent(data?: any): Response;
        mulitStatus(data?: any): Response;
        alreadyReported(data?: any): Response;
        imUsed(data?: any): Response;

        multipleChoices(data?: any): Response;
        movedPermanently(data?: any): Response;
        found(data?: any): Response;
        seeOther(data?: any): Response;
        notModified(data?: any): Response;
        useProxy(data?: any): Response;
        unused(data?: any): Response;
        temporaryRedirect(data?: any): Response;
        permanentRedirect(data?: any): Response;

        badRequest(data?: any): Response;
        unauthorized(data?: any): Response;
        paymentRequired(data?: any): Response;
        forbidden(data?: any): Response;
        notFound(data?: any): Response;
        methodNotAllowed(data?: any): Response;
        notAcceptable(data?: any): Response;
        proxyAuthenticationRequired(data?: any): Response;
        requestTimeout(data?: any): Response;
        conflict(data?: any): Response;
        gone(data?: any): Response;
        lengthRequired(data?: any): Response;
        preconditionFailed(data?: any): Response;
        payloadTooLarge(data?: any): Response;
        uriTooLong(data?: any): Response;
        unsupportedMediaType(data?: any): Response;
        rangeNotSatisfiable(data?: any): Response;
        expectationFailed(data?: any): Response;
        iAmATeapot(data?: any): Response;
        misdirectedRequest(data?: any): Response;
        unprocessableEntity(data?: any): Response;
        locked(data?: any): Response;
        failedDependency(data?: any): Response;
        tooEarly(data?: any): Response;
        upgradeRequired(data?: any): Response;
        preconditionRequired(data?: any): Response;
        tooManyRequests(data?: any): Response;
        requestHeaderFieldsTooLarge(data?: any): Response;
        unavailableForLegalReasons(data?: any): Response;

        internalServerError(data?: any): Response;
        notImplemented(data?: any): Response;
        badGateway(data?: any): Response;
        serviceUnavailable(data?: any): Response;
        gatewayTimeout(data?: any): Response;
        httpVersionNotSupported(data?: any): Response;
        variantAlsoNegotiates(data?: any): Response;
        insufficientStorage(data?: any): Response;
        loopDetected(data?: any): Response;
        notExtended(data?: any): Response;
        networkAuthenticationRequired(data?: any): Response;
      }

      interface Unofficial {
        thisIsFine(data?: any): Response;
        pageExpired(data?: any): Response;
        enhanceYourCalm(data?: any): Response;
        uRequestHeaderFieldsTooLarge(data?: any): Response;
        blockedBywindowsParentalControls(data?: any): Response;
        invalidToken(data?: any): Response;
        tokenRequired(data?: any): Response;
        bandwidthLimitExceeded(data?: any): Response;
        invalidSSLCertificate(data?: any): Response;
        siteIsOverLoaded(data?: any): Response;
        siteIsFrozen(data?: any): Response;
        networkReadTimeoutError(data?: any): Response;
      }

      interface InfoService {
        loginTimeout(data?: any): Response;
        retryWith(data?: any): Response;
        ifRedirect(data?: any): Response;
      }

      interface Nginx {
        noResponse(data?: any): Response;
        headerTooLarge(data?: any): Response;
        sslCertError(data?: any): Response;
        sslCertRequired(data?: any): Response;
        sentToHttpsPort(data?: any): Response;
        clientClosedRequest(data?: any): Response;
      }
      interface Cloudflare {
        webServerReturnedAnUnknownError(data?: any): Response;
        webServerIsDown(data?: any): Response;
        connectionTimedOut(data?: any): Response;
        originIsUnreachable(data?: any): Response;
        aTimeoutOccurred(data?: any): Response;
        sslHandshakeFailed(data?: any): Response;
        invalidSslCertificate(data?: any): Response;
        railgunError(data?: any): Response;
        notLoggedIn(data?: any): Response;
      }
    }
  }
  namespace Express {
    interface Response
      extends GoodStatus.Responses.Official,
        GoodStatus.Responses.Unofficial,
        GoodStatus.Responses.InfoService,
        GoodStatus.Responses.Nginx,
        GoodStatus.Responses.Cloudflare {
      goodStatus: {
        config: GoodStatus.Config;
      } & Response;

      [key: string]:
        | GoodStatus.Responses.Official
        | GoodStatus.Responses.Unofficial
        | GoodStatus.Responses.InfoService
        | GoodStatus.Responses.Nginx
        | GoodStatus.Responses.Cloudflare;
    }
  }
}

declare function goodStatus<T>(
  options?: goodStatus.Options
): NextHandleFunction;
declare module goodStatus {
  interface Options {
    /**
     * Specify if to send the response to the client with the status function
     */
    send?: boolean;

    /**
     * If available, the status functions will be attached to it the response object
     * @example res.gs.notFound()
     */
    statusAttribute?: keyof Response;
    extend?: boolean;
    unofficial?: boolean;
    infoService?: boolean;
    nginx?: boolean;
    cloudflare?: boolean;
  }
}

export = goodStatus;
