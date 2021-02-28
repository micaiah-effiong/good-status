# simple-status

[![Build Status](https://travis-ci.com/micaiah-effiong/api-responses.svg?branch=main)](https://travis-ci.com/micaiah-effiong/api-responses)

Simple express middleware for sending standard status response.

# Install

```bash
# NPM
npm i simple-status
```

# Usage

```js
var simpleStatus = require("simple-status");
app.use(simpleStatus());

app.all("/", (req, res) => {
  res.created();
});

app.all("/user", (req, res) => {
  res.badRequest();
});
```

This exposes the `simple-stutus` function for configuring the middlware.
