# good-status

[![Build Status](https://travis-ci.com/micaiah-effiong/good-status.svg?branch=main)](https://travis-ci.com/micaiah-effiong/good-status)

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

| Optioins   | Default | Description                                                  |
| :--------- | :-----: | :----------------------------------------------------------- |
| send       |  true   | This returns the response object to the user for further use |
| unofficial |  false  | This specifies the use of unoficial status code              |

To send response body manually

```js
app.use(goodStatus({ send: false }));

app.get("/admin", (req, res) => {
  const data = { msg: "require authentication" };
  res.unauthorized().json(data); // { msg: "require authentication" }, 401
});
```

To have access to unofficial status codes you have to enable them when initialazing the middleware

```js
app.use(goodStatus({ unofficial: true }));
```

## Available methods

All `OFFICIAL` and `UNOFFICIAL` status codes are available for use

#### Note:

> To use the unofficial status code, you must specify it while initializing
