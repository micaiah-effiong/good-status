# good-status

[![Build Status](https://travis-ci.com/micaiah-effiong/good-status.svg?branch=main)](https://travis-ci.com/micaiah-effiong/good-status)
[![check](https://github.com/micaiah-effiong/good-status/actions/workflows/npm-publish.yml/badge.svg??branch=main)](https://github.com/micaiah-effiong/good-status)

[![npm package](https://img.shields.io/npm/v/good-status)](https://www.npmjs.com/package/good-status)
[![npm package](https://img.shields.io/npm/l/good-status)](https://www.npmjs.com/package/good-status)
[![npm package](https://img.shields.io/npm/dt/good-status)](https://www.npmjs.com/package/good-status)
[![npm package](https://img.shields.io/npm/dm/good-status)](https://www.npmjs.com/package/good-status)

Simple express middleware for sending standard status response.

# Install

```bash
# NPM
npm i good-status --save
```

# Usage

### import and setup

```js
var goodStatus = require("good-status");
app.use(goodStatus());
```

This adds extra functions to the response object, for handling responses with accurate status code.

## Example

Send response with valid status code by using the methods

```js
app.post("/", (req, res) => {
  res.created({
    status: "success",
    data: { name: "John Doe" },
  }); // { status: "success", data: {name: "John Doe"} }, 201
});

app.get("/user", (req, res) => {
  res.notFound(); // 404
});
```

### Options

| Optioins    | Default | Description                                                                                         |
| :---------- | :-----: | :-------------------------------------------------------------------------------------------------- |
| send        |  true   | This returns the response object to the user for further use                                        |
| unofficial  |  false  | This specifies the use of unoficial status code                                                     |
| extend      |  false  | When true all good-status response function will be populated to the response                       |
| nginx       |  false  | When true, all status codes for `Nginx` will be available                                           |
| infoService |  false  | When true, all status codes for `Microsoft's Internet Information Services (IIS)` will be available |
| cloudflare  |  false  | When true, all status codes for `Cloudflare` will be available                                      |

For more information on the status codes, please refer to [HTTP Status Code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

To send response body manually

```js
app.get("/admin", (req, res) => {
  const data = { msg: "require authentication" };
  res.goodStatus.unauthorized().json(data); // { msg: "require authentication" }, 401
});
```

To add the response functions to the response object

```ts
app.get("/admin", goodStatus({ extend: true }), (req, res) => {
  const data = { msg: "require authentication" };
  res.unauthorized().json(data);
});

// OR

app.use(goodStatus({ extend: true }));
app.get("/admin", (req, res) => {
  const data = { msg: "require authentication" };
  res.unauthorized().json(data);
});
```

To have access to unofficial status codes you have to enable them when initialazing the middleware

```js
app.use(goodStatus({ unofficial: true }));
```

To send response with custom status code function

```js
app.use(goodStatus({ send: true }));
app.get("/admin", (req, res) => {
  res.goodStatus.unauthorized({ msg: "require authentication" });
});

app.use(goodStatus({ send: true, extend: true }));
app.get("/test", (req, res) => {
  res.unauthorized({ msg: "require authentication" });
});
```

## Available methods

All `OFFICIAL` and `UNOFFICIAL` status codes are available for use

#### Note:

> To use the unofficial status code, you must specify it while initializing
