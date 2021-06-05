const { should } = require("chai");
const gs = require("../lib");

describe("Initialising gs middleware with wrong configuration", function () {
  it("set wrong configuration data type", function () {
    const init = () => gs(" ");
    should().throw(init, "config must be an object");
  });

  it("set middleware configuration to array type", function () {
    const init = () => gs(new Array());
    should().throw(init, "config must be an object");
  });

  /*  it("set invalid resValue in middleware config", function () {
    const mid = gs({ resValue: 4});
    const req = {};
    const res = {};
    const next = () => {};
    mid(req, res, next);
    should().not.exist(res.gs, "no status attribute attached");
  });*/
});

describe("Initialise gs middleware", function () {
  describe("initialise without statusAttribute", function () {
    it("set status code functions on response object", function () {
      const mid = gs();
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().not.exist(res.gs, "no status attribute attached");
    });
  });

  describe("initialise with statusAttribute", function () {
    const mid = gs({ statusAttribute: "gs" });
    it("set status code functions on res[statusAttribute]", function () {
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(res.gs, "status attribute was not attached");
    });

    it("should have ok() method on gs Object", function () {
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(res.gs.ok, "ok method is not available exists");
    });

    it("should have badRequest()", function () {
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(res.gs.badRequest, "badRequest method does not exists");
    });
  });
});

describe("Initialise gs middleware with optional/unofficial status codes", function () {
  describe("Initialise with  unofficial", function () {
    it("Unofficial status-codes should be available", function () {
      const mid = gs({ statusAttribute: "gs", unofficial: true });
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(
        res.gs.thisIsFine,
        "unofficial status-codes  was not attached"
      );
    });
  });
  describe("Initialise with  infoService", function () {
    it("Internet Information Services status-codes should be available", function () {
      const mid = gs({ statusAttribute: "gs", infoService: true });
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(
        res.gs.loginTimeout,
        "infoService status-codes  was not attached"
      );
    });
  });
  describe("Initialise with  nginx", function () {
    it("Nginx status-codes should be available", function () {
      const mid = gs({ statusAttribute: "gs", nginx: true });
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(
        res.gs.headerTooLarge,
        "nginx status-codes  was not attached"
      );
    });
  });
  describe("Initialise with  cloudflare", function () {
    it("Cloudflare status-codes should be available", function () {
      const mid = gs({ statusAttribute: "gs", cloudflare: true });
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(
        res.gs.webServerReturnedAnUnknownError,
        "cloudflare status-codes was not attached"
      );
    });
  });
});
