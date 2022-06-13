import http from "http";
import express from "express";
import goodStatus from "../lib";

const app = express();
const server = http.createServer(app);

// add middleware
app.use(express.json());
app.use(goodStatus());
app.use(
  goodStatus({
    send: true,
    extend: true,
  })
);

app.get("/ok", (req, res) => {
  res.ok();
});

// 2XX
app.post("/created", (req, res) => {
  res.created(req.body);
});

app.get("/accepted", goodStatus({ extend: false, send: true }), (req, res) => {
  res.goodStatus.accepted();
});

app.get("/nonAuthoritativeInformation", (req, res) => {
  res.nonAuthoritativeInformation();
});

app.get("/noContent", (req, res) => {
  res.noContent();
});

app.get("/resetContent", (req, res) => {
  res.resetContent();
});

app.get("/partialContent", (req, res) => {
  res.partialContent();
});

app.get("/mulitStatus", (req, res) => {
  res.mulitStatus();
});

app.get("/alreadyReported", (req, res) => {
  res.alreadyReported();
});

app.get("/imUsed", (req, res) => {
  res.imUsed();
});

app.get("/multipleChoice", (req, res) => {
  res.multipleChoices();
});

app.get("/movedPermanently", (req, res) => {
  res.movedPermanently();
});

app.get("/found", (req, res) => {
  res.found();
});

app.get("/seeOther", (req, res) => {
  res.seeOther();
});

app.get("/notModified", (req, res) => {
  res.notModified();
});

app.get("/useProxy", (req, res) => {
  res.useProxy();
});

app.get("/unused", (req, res) => {
  res.unused();
});

app.get("/temporaryRedirect", (req, res) => {
  res.temporaryRedirect();
});

app.get("/permanentRedirect", (req, res) => {
  res.permanentRedirect();
});

// 4XX
app.post("/badRequest", (req, res) => {
  res.badRequest({
    status: "failed",
    data: req.body,
  });
});

app.get(
  "/unauthorized",
  goodStatus({ extend: true, send: false }),
  (req, res) => {
    res.unauthorized().json({ msg: "require authentication" });
  }
);

app.get("/paymentRequired", (req, res) => {
  res.paymentRequired();
});

app.get("/forbidden", (req, res) => {
  res.forbidden();
});

app.get("/notFound", (req, res) => {
  res.notFound();
});

app.get("/methodNotAllowed", (req, res) => {
  res.methodNotAllowed();
});

app.get("/notAcceptable", (req, res) => {
  res.notAcceptable();
});

app.get("/proxyAuthenticationRequired", (req, res) => {
  res.proxyAuthenticationRequired();
});

app.get("/requestTimeout", (req, res) => {
  res.requestTimeout();
});

app.post("/conflict", (req, res) => {
  res.conflict({
    status: "failed",
    data: req.body,
  });
});

app.get("/gone", (req, res) => {
  res.gone();
});

app.get("/lengthRequired", (req, res) => {
  res.lengthRequired();
});

app.get("/preconditionFailed", (req, res) => {
  res.preconditionFailed();
});

app.get("/payloadTooLarge", (req, res) => {
  res.payloadTooLarge();
});

app.get("/uriTooLong", (req, res) => {
  res.uriTooLong();
});

app.get("/unsupportedMediaType", (req, res) => {
  res.unsupportedMediaType();
});

app.get("/rangeNotSatisfiable", (req, res) => {
  res.rangeNotSatisfiable();
});

app.get("/expectationFailed", (req, res) => {
  res.expectationFailed();
});

app.get("/iAmATeapot", (req, res) => {
  res.iAmATeapot();
});

app.get("/misdirectedRequest", (req, res) => {
  res.misdirectedRequest();
});

app.get("/unprocessableEntry", (req, res) => {
  res.unprocessableEntity();
});

app.get("/locked", (req, res) => {
  res.locked();
});

app.get("/failedDependency", (req, res) => {
  res.failedDependency();
});

app.get("/tooEarly", (req, res) => {
  res.tooEarly();
});

app.get("/upgradeRequired", (req, res) => {
  res.upgradeRequired();
});

app.get("/preconditionRequired", (req, res) => {
  res.preconditionRequired();
});

app.get("/tooManyRequest", (req, res) => {
  res.tooManyRequests();
});

app.get("/requestHeaderFieldsTooLarge", (req, res) => {
  res.requestHeaderFieldsTooLarge();
});

app.get("/httpUnavailableForLegalReasons", (req, res) => {
  res.unavailableForLegalReasons();
});

//5XX
app.post("/internalServerError", (req, res) => {
  res.internalServerError({
    status: "failed",
    data: req.body,
  });
});

app.get("/notImplemented", (req, res) => {
  res.notImplemented();
});

app.post("/badGateway", (req, res) => {
  res.badGateway({
    status: "failed",
    data: req.body,
  });
});

app.get("/serviceUnavailable", (req, res) => {
  res.serviceUnavailable();
});

app.get("/gatewayTimeout", (req, res) => {
  res.gatewayTimeout();
});

app.get("/httpVersionNotSupported", (req, res) => {
  res.httpVersionNotSupported();
});

app.get("/variantAlsoNegotiates", (req, res) => {
  res.variantAlsoNegotiates();
});

app.get("/insufficientStorage", (req, res) => {
  res.insufficientStorage();
});

app.get("/loopDetected", (req, res) => {
  res.loopDetected();
});

app.get("/notExtended", (req, res) => {
  res.notExtended();
});

app.get("/networkAuthenticationRequired", (req, res) => {
  res.networkAuthenticationRequired();
});

/*
 * unofficial
 */
app.use(
  goodStatus({
    unofficial: true,
    infoService: true,
    nginx: true,
    cloudflare: true,
    send: true,
    extend: true,
  })
);

// app.get("/checkpoint", (req, res) => {
//   res.checkpoint();
// });

app.get("/thisIsFine", (req, res) => {
  res.thisIsFine();
});

app.get("/pageExpired", (req, res) => {
  res.pageExpired();
});

app.get("/enhanceYourCalm", (req, res) => {
  res.enhanceYourCalm();
});

app.get("/uRequestHeaderFieldsTooLarge", (req, res) => {
  res.uRequestHeaderFieldsTooLarge();
});

app.get("/blockedBywindowsParentalControls", (req, res) => {
  res.blockedBywindowsParentalControls();
});

app.get("/invalidToken", (req, res) => {
  res.invalidToken();
});

app.get("/tokenRequired", (req, res) => {
  res.tokenRequired();
});

app.get("/bandwidthLimitExceeded", (req, res) => {
  res.bandwidthLimitExceeded();
});

app.get("/invalidSSLCertificate", (req, res) => {
  res.invalidSSLCertificate();
});

app.get("/siteIsOverLoaded", (req, res) => {
  res.siteIsOverLoaded();
});

app.get("/siteIsFrozen", (req, res) => {
  res.siteIsFrozen();
});

app.get("/networkReadTimeoutError", (req, res) => {
  res.networkReadTimeoutError();
});

// app.get("/sendConfig", goodStatus({ send: false }), (req, res) => {
//   res.ok().json({ msg: "require authentication" });
// });

app.get("/ifs-login-time-out", (req, res) => {
  res.loginTimeout();
});

app.get("/ifs-retry-with", (req, res) => {
  res.retryWith();
});

app.get("/ifs-redirect", (req, res) => {
  res.ifRedirect();
});

app.get("/nx-no-response", (req, res) => {
  res.noResponse();
});
app.get("/nx-header-too-large", (req, res) => {
  res.headerTooLarge();
});
app.get("/nx-ssl-cert-error", (req, res) => {
  res.sslCertError();
});
app.get("/nx-ssl-cert-required", (req, res) => {
  res.sslCertRequired();
});
app.get("/nx-sent-to-https-port", (req, res) => {
  res.sentToHttpsPort();
});
app.get("/nx-client-closed-request", (req, res) => {
  res.clientClosedRequest();
});

app.get("/cf-web-server-returned-unknown-error", (req, res) => {
  res.webServerReturnedAnUnknownError();
});

app.get("/cf-server-is-down", (req, res) => {
  res.webServerIsDown();
});

app.get("/cf-connection-timed-out", (req, res) => {
  res.connectionTimedOut();
});

app.get("/cf-origin-is-unreachable", (req, res) => {
  res.originIsUnreachable();
});

app.get("/cf-a-timeout-occurred", (req, res) => {
  res.aTimeoutOccurred();
});

app.get("/cf-ssl-handshake-failed", (req, res) => {
  res.sslHandshakeFailed();
});

app.get("/cf-invalid-ssl-certificate", (req, res) => {
  res.invalidSslCertificate();
});

app.get("/cf-railgun-error", (req, res) => {
  res.railgunError();
});

app.get("/cf-not-logged-in", (req, res) => {
  res.notLoggedIn();
});

export default server;
