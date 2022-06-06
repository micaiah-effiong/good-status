import gs from "../lib";

describe("Initialise goodStatus middleware", function () {
  describe("initialise without extend", function () {
    it("set status code functions on response object", function () {
      const mid = gs();
      const req: any = {};
      const res: any = {};
      const next = () => {};
      mid(req, res, next);
      expect(res.goodStatus).toBeDefined();
      expect(res.ok).not.toBeDefined();
    });
  });

  describe("initialise with extend", function () {
    it("set status code functions on response object", function () {
      const mid = gs({ extend: true });
      const req: any = {};
      const res: any = {};
      const next = () => {};
      mid(req, res, next);
      expect(res.goodStatus).toBeDefined();
      expect(res.ok).toBeDefined();
      expect(res.notFound).toBeDefined();
    });
  });

  describe("initialise without unofficial and extra status", function () {
    it("set status code functions on response object", function () {
      const mid = gs({ extend: true });
      const req: any = {};
      const res: any = {};
      const next = () => {};
      mid(req, res, next);
      expect(res.thisIsFine).not.toBeDefined();
      expect(res.loginTimeout).not.toBeDefined();
      expect(res.noResponse).not.toBeDefined();
      expect(res.webServerReturnedAnUnknownError).not.toBeDefined();
    });
  });

  describe("initialise with unofficial and extra status", function () {
    it("set status code functions on response object", function () {
      const mid = gs({
        extend: true,
        unofficial: true,
        infoService: true,
        nginx: true,
        cloudflare: true,
      });
      const req: any = {};
      const res: any = {};
      const next = () => {};
      mid(req, res, next);
      expect(res.thisIsFine).toBeDefined();
      expect(res.loginTimeout).toBeDefined();
      expect(res.noResponse).toBeDefined();
      expect(res.webServerReturnedAnUnknownError).toBeDefined();
    });
  });
});
