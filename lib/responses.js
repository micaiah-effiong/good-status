const checkData = require("./checkData");
const status = require("./status-codes");

const official = {
  // 2**
  ok: function (data) {
    this.status(status.OFFICIAL.HTTP_OK);
    return checkData(this, data);
  },
  created: function (data) {
    this.status(status.OFFICIAL.HTTP_CREATED);
    return checkData(this, data);
  },

  accepted: function (data) {
    this.status(status.OFFICIAL.HTTP_ACCEPTED);
    return checkData(this, data);
  },

  nonAuthoritativeInformation: function (data) {
    this.status(status.OFFICIAL.HTTP_NON_AUTHORITATIVE_INFORMATION);
    return checkData(this, data);
  },

  noContent: function (data) {
    this.status(status.OFFICIAL.HTTP_NO_CONTENT);
    return checkData(this, data);
  },

  resetContent: function (data) {
    this.status(status.OFFICIAL.HTTP_RESET_CONTENT);
    return checkData(this, data);
  },

  partialContent: function (data) {
    this.status(status.OFFICIAL.HTTP_PARTIAL_CONTENT);
    return checkData(this, data);
  },

  mulitStatus: function (data) {
    this.status(status.OFFICIAL.HTTP_MULTI_STATUS);
    return checkData(this, data);
  },

  alreadyReported: function (data) {
    this.status(status.OFFICIAL.HTTP_ALREADY_REPORTED);
    return checkData(this, data);
  },

  imUsed: function (data) {
    this.status(status.OFFICIAL.HTTP_IM_USED);
    return checkData(this, data);
  },

  // 3**
  multipleChoice: function (data) {
    this.status(status.OFFICIAL.HTTP_MULTIPLE_CHOICE);
    return checkData(this, data);
  },

  movedPermanently: function (data) {
    this.status(status.OFFICIAL.HTTP_MOVED_PERMANENTLY);
    return checkData(this, data);
  },

  found: function (data) {
    this.status(status.OFFICIAL.HTTP_FOUND);
    return checkData(this, data);
  },

  seeOther: function (data) {
    this.status(status.OFFICIAL.HTTP_SEE_OTHER);
    return checkData(this, data);
  },

  notModified: function (data) {
    this.status(status.OFFICIAL.HTTP_NOT_MODIFIED);
    return checkData(this, data);
  },

  useProxy: function (data) {
    this.status(status.OFFICIAL.HTTP_USE_PROXY);
    return checkData(this, data);
  },

  unused: function (data) {
    this.status(status.OFFICIAL.HTTP_UNUSED);
    return checkData(this, data);
  },

  temporaryRedirect: function (data) {
    this.status(status.OFFICIAL.HTTP_TEMPORARY_REDIRECT);
    return checkData(this, data);
  },

  permanentRedirect: function (data) {
    this.status(status.OFFICIAL.HTTP_PERMANENT_REDIRECT);
    return checkData(this, data);
  },

  // 4**
  badRequest: function (data) {
    this.status(status.OFFICIAL.HTTP_BAD_REQUEST);
    return checkData(this, data);
  }, // 400
  unauthorized: function (data) {
    this.status(status.OFFICIAL.HTTP_UNAUTHORIZED);
    return checkData(this, data);
  }, // 401

  paymentRequired: function (data) {
    this.status(status.OFFICIAL.HTTP_PAYMENT_REQUIRED);
    return checkData(this, data);
  },
  forbidden: function (data) {
    this.status(status.OFFICIAL.HTTP_FORBIDDEN);
    return checkData(this, data);
  }, // 403
  notFound: function (data) {
    this.status(status.OFFICIAL.HTTP_NOT_FOUND);
    return checkData(this, data);
  }, // 404

  methodNotAllowed: function (data) {
    this.status(status.OFFICIAL.HTTP_METHOD_NOT_ALLOWED);
    return checkData(this, data);
  },

  notAcceptable: function (data) {
    this.status(status.OFFICIAL.HTTP_NOT_ACCEPTABLE);
    return checkData(this, data);
  },

  proxyAuthenticationRequired: function (data) {
    this.status(status.OFFICIAL.HTTP_PROXY_AUTHENTICATION_REQUIRED);
    return checkData(this, data);
  },

  requestTimeout: function (data) {
    this.status(status.OFFICIAL.HTTP_REQUEST_TIMEOUT);
    return checkData(this, data);
  },

  conflict: function (data) {
    this.status(status.OFFICIAL.HTTP_CONFILCT);
    return checkData(this, data);
  },

  gone: function (data) {
    this.status(status.OFFICIAL.HTTP_GONE);
    return checkData(this, data);
  },

  lengthRequired: function (data) {
    this.status(status.OFFICIAL.HTTP_LENGTH_REQUIRED);
    return checkData(this, data);
  },

  preconditionFailed: function (data) {
    this.status(status.OFFICIAL.HTTP_PRECONDITION_FAILED);
    return checkData(this, data);
  },

  payloadTooLarge: function (data) {
    this.status(status.OFFICIAL.HTTP_PAYLOAD_TOO_LARGE);
    return checkData(this, data);
  },

  uriTooLong: function (data) {
    this.status(status.OFFICIAL.HTTP_URI_TOO_LONG);
    return checkData(this, data);
  },

  unsupportedMediaType: function (data) {
    this.status(status.OFFICIAL.HTTP_UNSUPPORTED_MEDIA_TYPE);
    return checkData(this, data);
  },

  rangeNotSatisfiable: function (data) {
    this.status(status.OFFICIAL.HTTP_RANGE_NOT_SATISFIABLE);
    return checkData(this, data);
  },

  expectationFailed: function (data) {
    this.status(status.OFFICIAL.HTTP_EXPECTATION_FAILED);
    return checkData(this, data);
  },

  iAmATeapot: function (data) {
    this.status(status.OFFICIAL.HTTP_I_AM_A_TEAPOT);
    return checkData(this, data);
  },

  misdirectedRequest: function (data) {
    this.status(status.OFFICIAL.HTTP_MISDIRECTED_REQUEST);
    return checkData(this, data);
  },

  unprocessableEntry: function (data) {
    this.status(status.OFFICIAL.HTTP_UNPROCESSABLE_ENTRY);
    return checkData(this, data);
  },

  locked: function (data) {
    this.status(status.OFFICIAL.HTTP_LOCKED);
    return checkData(this, data);
  },

  failedDependency: function (data) {
    this.status(status.OFFICIAL.HTTP_FAILED_DEPENDENCY);
    return checkData(this, data);
  },

  tooEarly: function (data) {
    this.status(status.OFFICIAL.HTTP_TOO_EARLY);
    return checkData(this, data);
  },

  upgradeRequired: function (data) {
    this.status(status.OFFICIAL.HTTP_UPGRADE_REQUIRED);
    return checkData(this, data);
  },

  preconditionRequired: function (data) {
    this.status(status.OFFICIAL.HTTP_PRECONDITION_REQUIRED);
    return checkData(this, data);
  },

  tooManyRequest: function (data) {
    this.status(status.OFFICIAL.HTTP_TOO_MANY_REQUEST);
    return checkData(this, data);
  },

  requestHeaderFieldsTooLarge: function (data) {
    this.status(status.OFFICIAL.HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE);
    return checkData(this, data);
  },

  httpUnavailableForLegalReasons: function (data) {
    this.status(status.OFFICIAL.HTTP_UNAVAILABLE_FOR_LEGAL_REASONS);
    return checkData(this, data);
  },

  // 5**
  internalServerError: function (data) {
    this.status(status.OFFICIAL.HTTP_INTERNAL_SERVER_ERROR);
    return checkData(this, data);
  },

  notImplemented: function (data) {
    this.status(status.OFFICIAL.HTTP_NOT_IMPLEMENTED);
    return checkData(this, data);
  },

  badGateway: function (data) {
    this.status(status.OFFICIAL.HTTP_BAD_GETEWAY);
    return checkData(this, data);
  },

  serviceUnavailable: function (data) {
    this.status(status.OFFICIAL.HTTP_SERVICE_UNAVAILABLE);
    return checkData(this, data);
  },

  gatewayTimeout: function (data) {
    this.status(status.OFFICIAL.HTTP_GATEWAY_TIMEOUT);
    return checkData(this, data);
  },

  httpVersionNotSupported: function (data) {
    this.status(status.OFFICIAL.HTTP_HTTP_VERSION_NOT_SUPPORTED);
    return checkData(this, data);
  },

  variantAlsoNegotiates: function (data) {
    this.status(status.OFFICIAL.HTTP_VARIANT_ALSO_NEGOTIATES);
    return checkData(this, data);
  },

  insufficientStorage: function (data) {
    this.status(status.OFFICIAL.HTTP_INSUFFICIENT_STORAGE);
    return checkData(this, data);
  },

  loopDetected: function (data) {
    this.status(status.OFFICIAL.HTTP_LOOP_DETECTED);
    return checkData(this, data);
  },

  notExtended: function (data) {
    this.status(status.OFFICIAL.HTTP_NOT_EXTENDED);
    return checkData(this, data);
  },

  networkAuthenticationRequired: function (data) {
    this.status(status.OFFICIAL.HTTP_NETWORK_AUTHENTICATION_REQUIRED);
    return checkData(this, data);
  },
};

const unofficial = {
  thisIsFine: function (data) {
    this.status(status.UNOFFICIAL.HTTP_THIS_IS_FINE);
    return checkData(this, data);
  },

  pageExpired: function (data) {
    this.status(status.UNOFFICIAL.HTTP_PAGE_EXPIRED);
    return checkData(this, data);
  },

  enhanceYourCalm: function (data) {
    this.status(status.UNOFFICIAL.HTTP_ENHANCE_YOUR_CALM);
    return checkData(this, data);
  },

  uRequestHeaderFieldsTooLarge: function (data) {
    this.status(status.UNOFFICIAL.HTTP_U_REQUEST_HEADER_FIELDS_TOO_LARGE);
    return checkData(this, data);
  },

  blockedBywindowsParentalControls: function (data) {
    this.status(status.UNOFFICIAL.HTTP_BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS);
    return checkData(this, data);
  },

  invalidToken: function (data) {
    this.status(status.UNOFFICIAL.HTTP_INVALID_TOKEN);
    return checkData(this, data);
  },

  tokenRequired: function (data) {
    this.status(status.UNOFFICIAL.HTTP_TOKEN_REQUIRED);
    return checkData(this, data);
  },

  bandwidthLimitExceeded: function (data) {
    this.status(status.UNOFFICIAL.HTTP_BANDWIDTH_LIMIT_EXCEEDED);
    return checkData(this, data);
  },

  invalidSSLCertificate: function (data) {
    this.status(status.UNOFFICIAL.HTTP_INVALID_SSL_CERTIFICATE);
    return checkData(this, data);
  },

  siteIsOverLoaded: function (data) {
    this.status(status.UNOFFICIAL.HTTP_SITE_IS_OVERLOADED);
    return checkData(this, data);
  },

  siteIsFrozen: function (data) {
    this.status(status.UNOFFICIAL.HTTP_SITE_IS_FROZEN);
    return checkData(this, data);
  },

  networkReadTimeoutError: function (data) {
    this.status(status.UNOFFICIAL.HTTP_NETWORK_READ_TIMEOUT_ERROR);
    return checkData(this, data);
  },
};

exports.official = official;
exports.unofficial = unofficial;
