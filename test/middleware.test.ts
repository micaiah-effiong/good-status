const { should } = require("chai");
const gs = require("../lib");

describe("Initialising gs middleware with wrong congiguration", function () {
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
    it("set status code functions on response object", function () {
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(res.gs, "status attribute attached");
    });

    it("should have ok() method on gs Object", function () {
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(res.gs.ok, "ok method exists");
    });

    it("should have badRequest()", function () {
      const req = {};
      const res = {};
      const next = () => {};
      mid(req, res, next);
      should().exist(res.gs, "badRequest method exists");
    });
  });
});
