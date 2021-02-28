const server = require("./server");
const request = require("supertest");
const { assert } = require("chai");

describe("Testing responses and Status codes", function () {
  describe("GET /ok", function () {
    it("responds with 200", function (done) {
      request(server).get("/ok").expect(200, done);
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

  describe("GET /forbidden", function () {
    it("responds with 403", function (done) {
      request(server).get("/forbidden").expect(403, done);
    });
  });

  describe("GET /notFound", function () {
    it("responds with 404", function (done) {
      request(server).get("/notFound").expect(404, done);
    });
  });

  describe("post /conflict", function () {
    it("responds with 409", function (done) {
      request(server).post("/conflict").expect(409, done);
    });
  });

  describe("GET /invalidToken", function () {
    it("responds with 498", function (done) {
      request(server).get("/invalidToken").expect(498, done);
    });
  });

  describe("POST /serverError", function () {
    it("responds with 500", function (done) {
      request(server).post("/serverError").expect(500, done);
    });
  });

  describe("POST /badGateway", function () {
    it("responds with 502", function (done) {
      request(server).post("/badGateway").expect(502, done);
    });
  });

  describe("GET /serviceUnavailable", function () {
    it("responds with 503", function (done) {
      request(server).get("/serviceUnavailable").expect(503, done);
    });
  });
});
