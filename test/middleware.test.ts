import gs from "../lib";

describe("Initialising gs middleware with wrong congiguration", function () {
  it("set wrong configuration data type", function () {
    const init = () => gs(" " as GoodStatus.Config);
    expect(init).toThrow("config must be an object");
  });

  it("set middleware configuration to array type", function () {
    const init = () => gs(new Array() as GoodStatus.Config);
    expect(init).toThrow("config must be an object");
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
      const req: any = {};
      const res: any = {};
      const next = () => {};
      mid(req, res, next);
      expect(res.gs).not.toBeDefined();
    });
  });

  describe("initialise with statusAttribute", function () {
    const mid = gs({ statusAttribute: "gs" });
    it("set status code functions on response object", function () {
      const req: any = {};
      const res: any = {};
      const next = () => {};
      mid(req, res, next);
      expect(res.gs).toBeDefined();
    });

    it("should have ok() method on gs Object", function () {
      const req: any = {};
      const res: any = {};
      const next = () => {};
      mid(req, res, next);
      expect(res.gs.ok).toBeDefined();
    });

    it("should have badRequest()", function () {
      const req: any = {};
      const res: any = {};
      const next = () => {};
      mid(req, res, next);
      expect(res.gs).toBeDefined();
    });
  });
});
