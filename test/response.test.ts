import server from "./server";
import request from "supertest";

/*
Test for HTTP official status code
*/
afterAll(() => {
  server.close();
});

describe("Official responses and status codes", function () {
  describe("200+ responses", function () {
    describe("GET /ok", function () {
      it("responds with 200", async () => {
        await request(server).get("/ok").expect(200);
      });
    });

    describe("POST /Created", function () {
      it("responds with 201", async () => {
        const res = await request(server)
          .post("/created")
          .send({ name: "John Doe", status: "success" })
          .expect(201);

        expect(res.body.status).toEqual("success");
        expect(res.body.name).toEqual("John Doe");
      });
    });

    describe("GET /accepted", function () {
      it("responds with 202", async () => {
        await request(server).get("/accepted").expect(202);
      });
    });

    describe("GET /nonAuthoritativeInformation", function () {
      it("responds with 203", async () => {
        await request(server).get("/nonAuthoritativeInformation").expect(203);
      });
    });

    describe("GET /noContent", function () {
      it("responds with 204", async () => {
        await request(server).get("/noContent").expect(204);
      });
    });

    describe("GET /resetContent", function () {
      it("responds with 205", async () => {
        await request(server).get("/resetContent").expect(205);
      });
    });

    describe("GET /partialContent", function () {
      it("responds with 206", async () => {
        await request(server).get("/partialContent").expect(206);
      });
    });

    describe("GET /mulitStatus", function () {
      it("responds with 207", async () => {
        await request(server).get("/mulitStatus").expect(207);
      });
    });

    describe("GET /alreadyReported", function () {
      it("responds with 208", async () => {
        await request(server).get("/alreadyReported").expect(208);
      });
    });

    describe("GET /imUsed", function () {
      it("responds with 226", async () => {
        await request(server).get("/imUsed").expect(226);
      });
    });
  });
  describe("300+ responses", function () {
    describe("GET /multipleChoice", function () {
      it("responds with 300", async () => {
        await request(server).get("/multipleChoice").expect(300);
      });
    });

    describe("GET /movedPermanently", function () {
      it("responds with 301", async () => {
        await request(server).get("/movedPermanently").expect(301);
      });
    });

    describe("GET /found", function () {
      it("responds with 302", async () => {
        await request(server).get("/found").expect(302);
      });
    });

    describe("GET /seeOther", function () {
      it("responds with 303", async () => {
        await request(server).get("/seeOther").expect(303);
      });
    });

    describe("GET /notModified", function () {
      it("responds with 304", async () => {
        await request(server).get("/notModified").expect(304);
      });
    });

    describe("GET /useProxy", function () {
      it("responds with 305", async () => {
        await request(server).get("/useProxy").expect(305);
      });
    });

    describe("GET /unused", function () {
      it("responds with 306", async () => {
        await request(server).get("/unused").expect(306);
      });
    });

    describe("GET /temporaryRedirect", function () {
      it("responds with 307", async () => {
        await request(server).get("/temporaryRedirect").expect(307);
      });
    });

    describe("GET /permanentRedirect", function () {
      it("responds with 308", async () => {
        await request(server).get("/permanentRedirect").expect(308);
      });
    });
  });
  describe("400+ responses", function () {
    describe("POST /badRequest", function () {
      it("responds with 400", async () => {
        await request(server)
          .post("/badRequest")
          .send({ status: "failed" })
          .expect(400)
          .then((res) => {
            expect(res.body.status).toEqual("failed");
          });
      });
    });

    describe("GET /unauthorized", function () {
      it("responds with 401", async () => {
        await request(server)
          .get("/unauthorized")
          .send({ msg: "require authentication" })
          .expect(401)
          .then((res) => {
            expect(res.body.msg).toEqual("require authentication");
          });
      });
    });

    describe("GET /paymentRequired", function () {
      it("responds with 402", async () => {
        await request(server).get("/paymentRequired").expect(402);
      });
    });

    describe("GET /forbidden", function () {
      it("responds with 403", async () => {
        await request(server).get("/forbidden").expect(403);
      });
    });

    describe("GET /notFound", function () {
      it("responds with 404", async () => {
        await request(server).get("/notFound").expect(404);
      });
    });

    describe("GET /methodNotAllowed", function () {
      it("responds with 405", async () => {
        await request(server).get("/methodNotAllowed").expect(405);
      });
    });

    describe("GET /notAcceptable", function () {
      it("responds with 406", async () => {
        await request(server).get("/notAcceptable").expect(406);
      });
    });

    describe("GET /proxyAuthenticationRequired", function () {
      it("responds with 407", async () => {
        await request(server).get("/proxyAuthenticationRequired").expect(407);
      });
    });

    describe("GET /requestTimeout", function () {
      it("responds with 408", async () => {
        await request(server).get("/requestTimeout").expect(408);
      });
    });

    describe("post /conflict", function () {
      it("responds with 409", async () => {
        await request(server).post("/conflict").expect(409);
      });
    });

    describe("GET /gone", function () {
      it("responds with 410", async () => {
        await request(server).get("/gone").expect(410);
      });
    });

    describe("GET /lengthRequired", function () {
      it("responds with 411", async () => {
        await request(server).get("/lengthRequired").expect(411);
      });
    });

    describe("GET /preconditionFailed", function () {
      it("responds with 412", async () => {
        await request(server).get("/preconditionFailed").expect(412);
      });
    });

    describe("GET /payloadTooLarge", function () {
      it("responds with 413", async () => {
        await request(server).get("/payloadTooLarge").expect(413);
      });
    });

    describe("GET /uriTooLong", function () {
      it("responds with 414", async () => {
        await request(server).get("/uriTooLong").expect(414);
      });
    });

    describe("GET /unsupportedMediaType", function () {
      it("responds with 415", async () => {
        await request(server).get("/unsupportedMediaType").expect(415);
      });
    });

    describe("GET /rangeNotSatisfiable", function () {
      it("responds with 416", async () => {
        await request(server).get("/rangeNotSatisfiable").expect(416);
      });
    });

    describe("GET /expectationFailed", function () {
      it("responds with 417", async () => {
        await request(server).get("/expectationFailed").expect(417);
      });
    });

    describe("GET /iAmATeapot", function () {
      it("responds with 418", async () => {
        await request(server).get("/iAmATeapot").expect(418);
      });
    });

    describe("GET /misdirectedRequest", function () {
      it("responds with 421", async () => {
        await request(server).get("/misdirectedRequest").expect(421);
      });
    });

    describe("GET /unprocessableEntry", function () {
      it("responds with 422", async () => {
        await request(server).get("/unprocessableEntry").expect(422);
      });
    });

    describe("GET /locked", function () {
      it("responds with 423", async () => {
        await request(server).get("/locked").expect(423);
      });
    });

    describe("GET /failedDependency", function () {
      it("responds with 424", async () => {
        await request(server).get("/failedDependency").expect(424);
      });
    });

    describe("GET /tooEarly", function () {
      it("responds with 425", async () => {
        await request(server).get("/tooEarly").expect(425);
      });
    });

    describe("GET /upgradeRequired", function () {
      it("responds with 426", async () => {
        await request(server).get("/upgradeRequired").expect(426);
      });
    });

    describe("GET /preconditionRequired", function () {
      it("responds with 428", async () => {
        await request(server).get("/preconditionRequired").expect(428);
      });
    });

    describe("GET /tooManyRequest", function () {
      it("responds with 429", async () => {
        await request(server).get("/tooManyRequest").expect(429);
      });
    });

    describe("GET /requestHeaderFieldsTooLarge", function () {
      it("responds with 431", async () => {
        await request(server).get("/requestHeaderFieldsTooLarge").expect(431);
      });
    });

    describe("GET /blockedBywindowsParentalControls", function () {
      it("responds with 450", async () => {
        await request(server)
          .get("/blockedBywindowsParentalControls")
          .expect(450);
      });
    });

    describe("GET /httpUnavailableForLegalReasons", function () {
      it("responds with 451", async () => {
        await request(server)
          .get("/httpUnavailableForLegalReasons")
          .expect(451);
      });
    });
  });
  describe("500+ responses", function () {
    describe("POST /internalServerError", function () {
      it("responds with 500", async () => {
        await request(server).post("/internalServerError").expect(500);
      });
    });

    describe("GET /notImplemented", function () {
      it("responds with 501", async () => {
        await request(server).get("/notImplemented").expect(501);
      });
    });

    describe("POST /badGateway", function () {
      it("responds with 502", async () => {
        await request(server).post("/badGateway").expect(502);
      });
    });

    describe("GET /serviceUnavailable", function () {
      it("responds with 503", async () => {
        await request(server).get("/serviceUnavailable").expect(503);
      });
    });

    describe("GET /gatewayTimeout", function () {
      it("responds with 504", async () => {
        await request(server).get("/gatewayTimeout").expect(504);
      });
    });

    describe("GET /httpVersionNotSupported", function () {
      it("responds with 505", async () => {
        await request(server).get("/httpVersionNotSupported").expect(505);
      });
    });

    describe("GET /variantAlsoNegotiates", function () {
      it("responds with 506", async () => {
        await request(server).get("/variantAlsoNegotiates").expect(506);
      });
    });

    describe("GET /insufficientStorage", function () {
      it("responds with 507", async () => {
        await request(server).get("/insufficientStorage").expect(507);
      });
    });

    describe("GET /loopDetected", function () {
      it("responds with 508", async () => {
        await request(server).get("/loopDetected").expect(508);
      });
    });

    describe("GET /notExtended", function () {
      it("responds with 510", async () => {
        await request(server).get("/notExtended").expect(510);
      });
    });

    describe("GET /networkAuthenticationRequired", function () {
      it("responds with 511", async () => {
        await request(server).get("/networkAuthenticationRequired").expect(511);
      });
    });
  });
});

/*
Test for HTTP unofficial status code
*/
describe("Unofficial responses and status codes", function () {
  // describe("GET /checkpoint", function () {
  //   it("responds with 103", async()=> {
  //     request(server)
  //       .get("/checkpoint")
  //       .expect(103)
  //       .then((res) => done())
  //       .catch(done);
  //   });
  // });
  describe("200+ responses", function () {
    describe("GET /thisIsFine", function () {
      it("responds with 218", async () => {
        await request(server).get("/thisIsFine").expect(218);
      });
    });
  });

  describe("400+ responses", function () {
    describe("GET /pageExpired", function () {
      it("responds with 419", async () => {
        await request(server).get("/pageExpired").expect(419);
      });
    });

    describe("GET /enhanceYourCalm", function () {
      it("responds with 420", async () => {
        await request(server).get("/enhanceYourCalm").expect(420);
      });
    });

    describe("GET /uRequestHeaderFieldsTooLarge", function () {
      it("responds with 430", async () => {
        await request(server).get("/uRequestHeaderFieldsTooLarge").expect(430);
      });
    });

    describe("GET /invalidToken", function () {
      it("responds with 498", async () => {
        await request(server).get("/invalidToken").expect(498);
      });
    });

    describe("GET /tokenRequired", function () {
      it("responds with 499", async () => {
        await request(server).get("/tokenRequired").expect(499);
      });
    });
  });

  describe("500+ responses", function () {
    describe("GET /bandwidthLimitExceeded", function () {
      it("responds with 509", async () => {
        await request(server).get("/bandwidthLimitExceeded").expect(509);
      });
    });

    describe("GET /invalidSSLCertificate", function () {
      it("responds with 526", async () => {
        await request(server).get("/invalidSSLCertificate").expect(526);
      });
    });

    describe("GET /siteIsOverLoaded", function () {
      it("responds with 529", async () => {
        await request(server).get("/siteIsOverLoaded").expect(529);
      });
    });

    describe("GET /siteIsFrozen", function () {
      it("responds with 530", async () => {
        await request(server).get("/siteIsFrozen").expect(530);
      });
    });

    describe("GET /networkReadTimeoutError", function () {
      it("responds with 598", async () => {
        await request(server).get("/networkReadTimeoutError").expect(598);
      });
    });
  });
});

/*
Test for HTTP Information Service status code
*/
describe("Information Service responses and status codes", function () {
  describe("GET /ifs-login-time-out", function () {
    it("responds with 440", async () => {
      await request(server).get("/ifs-login-time-out").expect(440);
    });
  });
  describe("GET /ifs-retry-with", function () {
    it("responds with 449", async () => {
      await request(server).get("/ifs-retry-with").expect(449);
    });
  });
  describe("GET /ifs-redirect", function () {
    it("responds with 451", async () => {
      await request(server).get("/ifs-redirect").expect(451);
    });
  });
});

/*
Test for HTTP nginx status code
*/
describe("Nginx responses and status codes", function () {
  describe("GET /nx-no-response", function () {
    it("responds with 444", async () => {
      await request(server).get("/nx-no-response").expect(444);
    });
  });

  describe("GET /nx-header-too-large", function () {
    it("responds with 494", async () => {
      await request(server).get("/nx-header-too-large").expect(494);
    });
  });

  describe("GET /nx-ssl-cert-error", function () {
    it("responds with 495", async () => {
      await request(server).get("/nx-ssl-cert-error").expect(495);
    });
  });

  describe("GET /nx-ssl-cert-required", function () {
    it("responds with 496", async () => {
      await request(server).get("/nx-ssl-cert-required").expect(496);
    });
  });

  describe("GET /nx-sent-to-https-port", function () {
    it("responds with 497", async () => {
      await request(server).get("/nx-sent-to-https-port").expect(497);
    });
  });

  describe("GET /nx-client-closed-request", function () {
    it("responds with 499", async () => {
      await request(server).get("/nx-client-closed-request").expect(499);
    });
  });
});

/*
Test for HTTP cloudflare status code
*/
describe("Cloudflare responses and status codes", function () {
  describe("GET /cf-web-server-returned-unknown-error", function () {
    it("responds with 520", async () => {
      await request(server)
        .get("/cf-web-server-returned-unknown-error")
        .expect(520);
    });
  });

  describe("GET /cf-server-is-down", function () {
    it("responds with 521", async () => {
      await request(server).get("/cf-server-is-down").expect(521);
    });
  });

  describe("GET /cf-connection-timed-out", function () {
    it("responds with 522", async () => {
      await request(server).get("/cf-connection-timed-out").expect(522);
    });
  });

  describe("GET /cf-origin-is-unreachable", function () {
    it("responds with 523", async () => {
      await request(server).get("/cf-origin-is-unreachable").expect(523);
    });
  });

  describe("GET /cf-a-timeout-occurred", function () {
    it("responds with 524", async () => {
      await request(server).get("/cf-a-timeout-occurred").expect(524);
    });
  });

  describe("GET /cf-ssl-handshake-failed", function () {
    it("responds with 525", async () => {
      await request(server).get("/cf-ssl-handshake-failed").expect(525);
    });
  });

  describe("GET /cf-invalid-ssl-certificate", function () {
    it("responds with 526", async () => {
      await request(server).get("/cf-invalid-ssl-certificate").expect(526);
    });
  });

  describe("GET /cf-railgun-error", function () {
    it("responds with 527", async () => {
      await request(server).get("/cf-railgun-error").expect(527);
    });
  });

  describe("GET /cf-not-logged-in", function () {
    it("responds with 530", async () => {
      await request(server).get("/cf-not-logged-in").expect(530);
    });
  });
});
