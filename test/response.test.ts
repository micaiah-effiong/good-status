const server = require("./server");
const request = require("supertest");
const { assert } = require("chai");

/*
Test for HTTP official status code
*/
describe("Official responses and status codes", function () {
  describe("200+ responses", function () {
    describe("GET /ok", function () {
      it("responds with 200", function (done) {
        request(server)
          .get("/ok")
          .expect(200)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("POST /Created", function () {
      it("responds with 201", function (done) {
        request(server)
          .post("/created")
          .send({ name: "John Doe" })
          .expect(201)
          .then((res) => {
            assert(res.body.status, "success");
            assert(res.body.data.name, "John Doe");
            done();
          })
          .catch(done);
      });
    });

    describe("GET /accepted", function () {
      it("responds with 202", function (done) {
        request(server)
          .get("/accepted")
          .expect(202)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /nonAuthoritativeInformation", function () {
      it("responds with 203", function (done) {
        request(server)
          .get("/nonAuthoritativeInformation")
          .expect(203)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /noContent", function () {
      it("responds with 204", function (done) {
        request(server)
          .get("/noContent")
          .expect(204)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /resetContent", function () {
      it("responds with 205", function (done) {
        request(server)
          .get("/resetContent")
          .expect(205)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /partialContent", function () {
      it("responds with 206", function (done) {
        request(server)
          .get("/partialContent")
          .expect(206)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /mulitStatus", function () {
      it("responds with 207", function (done) {
        request(server)
          .get("/mulitStatus")
          .expect(207)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /alreadyReported", function () {
      it("responds with 208", function (done) {
        request(server)
          .get("/alreadyReported")
          .expect(208)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /imUsed", function () {
      it("responds with 226", function (done) {
        request(server)
          .get("/imUsed")
          .expect(226)
          .then((res) => done())
          .catch(done);
      });
    });
  });
  describe("300+ responses", function () {
    describe("GET /multipleChoice", function () {
      it("responds with 300", function (done) {
        request(server)
          .get("/multipleChoice")
          .expect(300)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /movedPermanently", function () {
      it("responds with 301", function (done) {
        request(server)
          .get("/movedPermanently")
          .expect(301)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /found", function () {
      it("responds with 302", function (done) {
        request(server)
          .get("/found")
          .expect(302)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /seeOther", function () {
      it("responds with 303", function (done) {
        request(server)
          .get("/seeOther")
          .expect(303)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /notModified", function () {
      it("responds with 304", function (done) {
        request(server)
          .get("/notModified")
          .expect(304)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /useProxy", function () {
      it("responds with 305", function (done) {
        request(server)
          .get("/useProxy")
          .expect(305)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /unused", function () {
      it("responds with 306", function (done) {
        request(server)
          .get("/unused")
          .expect(306)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /temporaryRedirect", function () {
      it("responds with 307", function (done) {
        request(server)
          .get("/temporaryRedirect")
          .expect(307)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /permanentRedirect", function () {
      it("responds with 308", function (done) {
        request(server)
          .get("/permanentRedirect")
          .expect(308)
          .then((res) => done())
          .catch(done);
      });
    });
  });
  describe("400+ responses", function () {
    describe("POST /badRequest", function () {
      it("responds with 400", function (done) {
        request(server)
          .post("/badRequest")
          .expect(400)
          .then((res) => {
            assert(res.body.status, "failed");
            done();
          })
          .catch(done);
      });
    });

    describe("GET /unauthorized", function () {
      it("responds with 401", function (done) {
        request(server)
          .get("/unauthorized")
          .expect(401)
          .then((res) => {
            assert(res.body.msg, "require authentication");
            done();
          })
          .catch(done);
      });
    });

    describe("GET /paymentRequired", function () {
      it("responds with 402", function (done) {
        request(server)
          .get("/paymentRequired")
          .expect(402)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /forbidden", function () {
      it("responds with 403", function (done) {
        request(server)
          .get("/forbidden")
          .expect(403)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /notFound", function () {
      it("responds with 404", function (done) {
        request(server)
          .get("/notFound")
          .expect(404)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /methodNotAllowed", function () {
      it("responds with 405", function (done) {
        request(server)
          .get("/methodNotAllowed")
          .expect(405)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /notAcceptable", function () {
      it("responds with 406", function (done) {
        request(server)
          .get("/notAcceptable")
          .expect(406)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /proxyAuthenticationRequired", function () {
      it("responds with 407", function (done) {
        request(server)
          .get("/proxyAuthenticationRequired")
          .expect(407)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /requestTimeout", function () {
      it("responds with 408", function (done) {
        request(server)
          .get("/requestTimeout")
          .expect(408)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("post /conflict", function () {
      it("responds with 409", function (done) {
        request(server)
          .post("/conflict")
          .expect(409)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /gone", function () {
      it("responds with 410", function (done) {
        request(server)
          .get("/gone")
          .expect(410)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /lengthRequired", function () {
      it("responds with 411", function (done) {
        request(server)
          .get("/lengthRequired")
          .expect(411)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /preconditionFailed", function () {
      it("responds with 412", function (done) {
        request(server)
          .get("/preconditionFailed")
          .expect(412)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /payloadTooLarge", function () {
      it("responds with 413", function (done) {
        request(server)
          .get("/payloadTooLarge")
          .expect(413)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /uriTooLong", function () {
      it("responds with 414", function (done) {
        request(server)
          .get("/uriTooLong")
          .expect(414)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /unsupportedMediaType", function () {
      it("responds with 415", function (done) {
        request(server)
          .get("/unsupportedMediaType")
          .expect(415)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /rangeNotSatisfiable", function () {
      it("responds with 416", function (done) {
        request(server)
          .get("/rangeNotSatisfiable")
          .expect(416)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /expectationFailed", function () {
      it("responds with 417", function (done) {
        request(server)
          .get("/expectationFailed")
          .expect(417)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /iAmATeapot", function () {
      it("responds with 418", function (done) {
        request(server)
          .get("/iAmATeapot")
          .expect(418)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /misdirectedRequest", function () {
      it("responds with 421", function (done) {
        request(server)
          .get("/misdirectedRequest")
          .expect(421)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /unprocessableEntry", function () {
      it("responds with 422", function (done) {
        request(server)
          .get("/unprocessableEntry")
          .expect(422)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /locked", function () {
      it("responds with 423", function (done) {
        request(server)
          .get("/locked")
          .expect(423)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /failedDependency", function () {
      it("responds with 424", function (done) {
        request(server)
          .get("/failedDependency")
          .expect(424)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /tooEarly", function () {
      it("responds with 425", function (done) {
        request(server)
          .get("/tooEarly")
          .expect(425)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /upgradeRequired", function () {
      it("responds with 426", function (done) {
        request(server)
          .get("/upgradeRequired")
          .expect(426)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /preconditionRequired", function () {
      it("responds with 428", function (done) {
        request(server)
          .get("/preconditionRequired")
          .expect(428)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /tooManyRequest", function () {
      it("responds with 429", function (done) {
        request(server)
          .get("/tooManyRequest")
          .expect(429)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /requestHeaderFieldsTooLarge", function () {
      it("responds with 431", function (done) {
        request(server)
          .get("/requestHeaderFieldsTooLarge")
          .expect(431)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /httpUnavailableForLegalReasons", function () {
      it("responds with 451", function (done) {
        request(server)
          .get("/httpUnavailableForLegalReasons")
          .expect(451)
          .then((res) => done())
          .catch(done);
      });
    });
  });
  describe("500+ responses", function () {
    describe("POST /internalServerError", function () {
      it("responds with 500", function (done) {
        request(server)
          .post("/internalServerError")
          .expect(500)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /notImplemented", function () {
      it("responds with 501", function (done) {
        request(server)
          .get("/notImplemented")
          .expect(501)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("POST /badGateway", function () {
      it("responds with 502", function (done) {
        request(server)
          .post("/badGateway")
          .expect(502)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /serviceUnavailable", function () {
      it("responds with 503", function (done) {
        request(server)
          .get("/serviceUnavailable")
          .expect(503)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /gatewayTimeout", function () {
      it("responds with 504", function (done) {
        request(server)
          .get("/gatewayTimeout")
          .expect(504)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /httpVersionNotSupported", function () {
      it("responds with 505", function (done) {
        request(server)
          .get("/httpVersionNotSupported")
          .expect(505)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /variantAlsoNegotiates", function () {
      it("responds with 506", function (done) {
        request(server)
          .get("/variantAlsoNegotiates")
          .expect(506)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /insufficientStorage", function () {
      it("responds with 507", function (done) {
        request(server)
          .get("/insufficientStorage")
          .expect(507)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /loopDetected", function () {
      it("responds with 508", function (done) {
        request(server)
          .get("/loopDetected")
          .expect(508)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /notExtended", function () {
      it("responds with 510", function (done) {
        request(server)
          .get("/notExtended")
          .expect(510)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /networkAuthenticationRequired", function () {
      it("responds with 511", function (done) {
        request(server)
          .get("/networkAuthenticationRequired")
          .expect(511)
          .then((res) => done())
          .catch(done);
      });
    });
  });
});

/*
Test for HTTP unofficial status code
*/
describe("Unofficial responses and status codes", function () {
  // describe("GET /checkpoint", function () {
  //   it("responds with 103", function (done) {
  //     request(server)
  //       .get("/checkpoint")
  //       .expect(103)
  //       .then((res) => done())
  //       .catch(done);
  //   });
  // });
  describe("200+ responses", function () {
    describe("GET /thisIsFine", function () {
      it("responds with 218", function (done) {
        request(server)
          .get("/thisIsFine")
          .expect(218)
          .then((res) => done())
          .catch(done);
      });
    });
  });

  describe("400+ responses", function () {
    describe("GET /pageExpired", function () {
      it("responds with 419", function (done) {
        request(server)
          .get("/pageExpired")
          .expect(419)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /enhanceYourCalm", function () {
      it("responds with 420", function (done) {
        request(server)
          .get("/enhanceYourCalm")
          .expect(420)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /uRequestHeaderFieldsTooLarge", function () {
      it("responds with 430", function (done) {
        request(server)
          .get("/uRequestHeaderFieldsTooLarge")
          .expect(430)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /invalidToken", function () {
      it("responds with 498", function (done) {
        request(server)
          .get("/invalidToken")
          .expect(498)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /tokenRequired", function () {
      it("responds with 499", function (done) {
        request(server)
          .get("/tokenRequired")
          .expect(499)
          .then((res) => done())
          .catch(done);
      });
    });
  });

  describe("500+ responses", function () {
    describe("GET /bandwidthLimitExceeded", function () {
      it("responds with 509", function (done) {
        request(server)
          .get("/bandwidthLimitExceeded")
          .expect(509)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /invalidSSLCertificate", function () {
      it("responds with 526", function (done) {
        request(server)
          .get("/invalidSSLCertificate")
          .expect(526)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /siteIsOverLoaded", function () {
      it("responds with 529", function (done) {
        request(server)
          .get("/siteIsOverLoaded")
          .expect(529)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /siteIsFrozen", function () {
      it("responds with 530", function (done) {
        request(server)
          .get("/siteIsFrozen")
          .expect(530)
          .then((res) => done())
          .catch(done);
      });
    });

    describe("GET /networkReadTimeoutError", function () {
      it("responds with 598", function (done) {
        request(server)
          .get("/networkReadTimeoutError")
          .expect(598)
          .then((res) => done())
          .catch(done);
      });
    });
  });
});

/*
Test for HTTP Information Service status code
*/
describe("Information Service responses and status codes", function () {
  describe("GET /ifs-login-time-out", function () {
    it("responds with 440", function (done) {
      request(server)
        .get("/ifs-login-time-out")
        .expect(440)
        .then((res) => done())
        .catch(done);
    });
  });
  describe("GET /ifs-retry-with", function () {
    it("responds with 449", function (done) {
      request(server)
        .get("/ifs-retry-with")
        .expect(449)
        .then((res) => done())
        .catch(done);
    });
  });
  describe("GET /ifs-redirect", function () {
    it("responds with 451", function (done) {
      request(server)
        .get("/ifs-redirect")
        .expect(451)
        .then((res) => done())
        .catch(done);
    });
  });
});

/*
Test for HTTP nginx status code
*/
describe("Nginx responses and status codes", function () {
  describe("GET /nx-no-response", function () {
    it("responds with 444", function (done) {
      request(server)
        .get("/nx-no-response")
        .expect(444)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /nx-header-too-large", function () {
    it("responds with 494", function (done) {
      request(server)
        .get("/nx-header-too-large")
        .expect(494)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /nx-ssl-cert-error", function () {
    it("responds with 495", function (done) {
      request(server)
        .get("/nx-ssl-cert-error")
        .expect(495)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /nx-ssl-cert-required", function () {
    it("responds with 496", function (done) {
      request(server)
        .get("/nx-ssl-cert-required")
        .expect(496)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /nx-sent-to-https-port", function () {
    it("responds with 497", function (done) {
      request(server)
        .get("/nx-sent-to-https-port")
        .expect(497)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /nx-client-closed-request", function () {
    it("responds with 499", function (done) {
      request(server)
        .get("/nx-client-closed-request")
        .expect(499)
        .then((res) => done())
        .catch(done);
    });
  });
});

/*
Test for HTTP cloudflare status code
*/
describe("Cloudflare responses and status codes", function () {
  describe("GET /cf-web-server-returned-unknown-error", function () {
    it("responds with 520", function (done) {
      request(server)
        .get("/cf-web-server-returned-unknown-error")
        .expect(520)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /cf-server-is-down", function () {
    it("responds with 521", function (done) {
      request(server)
        .get("/cf-server-is-down")
        .expect(521)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /cf-connection-timed-out", function () {
    it("responds with 522", function (done) {
      request(server)
        .get("/cf-connection-timed-out")
        .expect(522)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /cf-origin-is-unreachable", function () {
    it("responds with 523", function (done) {
      request(server)
        .get("/cf-origin-is-unreachable")
        .expect(523)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /cf-a-timeout-occured", function () {
    it("responds with 524", function (done) {
      request(server)
        .get("/cf-a-timeout-occured")
        .expect(524)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /cf-ssl-handshake-failed", function () {
    it("responds with 525", function (done) {
      request(server)
        .get("/cf-ssl-handshake-failed")
        .expect(525)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /cf-invalid-ssl-cert", function () {
    it("responds with 526", function (done) {
      request(server)
        .get("/cf-invalid-ssl-cert")
        .expect(526)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /cf-railgun-error", function () {
    it("responds with 527", function (done) {
      request(server)
        .get("/cf-railgun-error")
        .expect(527)
        .then((res) => done())
        .catch(done);
    });
  });

  describe("GET /cf-not-logged-in", function () {
    it("responds with 530", function (done) {
      request(server)
        .get("/cf-not-logged-in")
        .expect(530)
        .then((res) => done())
        .catch(done);
    });
  });
});
