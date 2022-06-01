import status from "./status-codes";
import { getCodeFn } from "./utils";

const official: GoodStatus.Responses.Official = {
  // 2**
  ok: getCodeFn(status.OFFICIAL.HTTP_OK),
  created: getCodeFn(status.OFFICIAL.HTTP_CREATED),
  accepted: getCodeFn(status.OFFICIAL.HTTP_ACCEPTED),
  nonAuthoritativeInformation: getCodeFn(
    status.OFFICIAL.HTTP_NON_AUTHORITATIVE_INFORMATION
  ),
  noContent: getCodeFn(status.OFFICIAL.HTTP_NO_CONTENT),
  resetContent: getCodeFn(status.OFFICIAL.HTTP_RESET_CONTENT),
  partialContent: getCodeFn(status.OFFICIAL.HTTP_PARTIAL_CONTENT),
  mulitStatus: getCodeFn(status.OFFICIAL.HTTP_MULTI_STATUS),
  alreadyReported: getCodeFn(status.OFFICIAL.HTTP_ALREADY_REPORTED),
  imUsed: getCodeFn(status.OFFICIAL.HTTP_IM_USED),

  // 3**
  multipleChoices: getCodeFn(status.OFFICIAL.HTTP_MULTIPLE_CHOICE),
  movedPermanently: getCodeFn(status.OFFICIAL.HTTP_MOVED_PERMANENTLY),
  found: getCodeFn(status.OFFICIAL.HTTP_FOUND),
  seeOther: getCodeFn(status.OFFICIAL.HTTP_SEE_OTHER),
  notModified: getCodeFn(status.OFFICIAL.HTTP_NOT_MODIFIED),
  useProxy: getCodeFn(status.OFFICIAL.HTTP_USE_PROXY),
  unused: getCodeFn(status.OFFICIAL.HTTP_UNUSED),
  temporaryRedirect: getCodeFn(status.OFFICIAL.HTTP_TEMPORARY_REDIRECT),
  permanentRedirect: getCodeFn(status.OFFICIAL.HTTP_PERMANENT_REDIRECT),

  // 4**
  badRequest: getCodeFn(status.OFFICIAL.HTTP_BAD_REQUEST), // 400
  unauthorized: getCodeFn(status.OFFICIAL.HTTP_UNAUTHORIZED), // 401
  paymentRequired: getCodeFn(status.OFFICIAL.HTTP_PAYMENT_REQUIRED),
  forbidden: getCodeFn(status.OFFICIAL.HTTP_FORBIDDEN), // 403
  notFound: getCodeFn(status.OFFICIAL.HTTP_NOT_FOUND), // 404
  methodNotAllowed: getCodeFn(status.OFFICIAL.HTTP_METHOD_NOT_ALLOWED),
  notAcceptable: getCodeFn(status.OFFICIAL.HTTP_NOT_ACCEPTABLE),
  proxyAuthenticationRequired: getCodeFn(
    status.OFFICIAL.HTTP_PROXY_AUTHENTICATION_REQUIRED
  ),
  requestTimeout: getCodeFn(status.OFFICIAL.HTTP_REQUEST_TIMEOUT),
  conflict: getCodeFn(status.OFFICIAL.HTTP_CONFILCT),
  gone: getCodeFn(status.OFFICIAL.HTTP_GONE),
  lengthRequired: getCodeFn(status.OFFICIAL.HTTP_LENGTH_REQUIRED),
  preconditionFailed: getCodeFn(status.OFFICIAL.HTTP_PRECONDITION_FAILED),
  payloadTooLarge: getCodeFn(status.OFFICIAL.HTTP_PAYLOAD_TOO_LARGE),
  uriTooLong: getCodeFn(status.OFFICIAL.HTTP_URI_TOO_LONG),
  unsupportedMediaType: getCodeFn(status.OFFICIAL.HTTP_UNSUPPORTED_MEDIA_TYPE),
  rangeNotSatisfiable: getCodeFn(status.OFFICIAL.HTTP_RANGE_NOT_SATISFIABLE),
  expectationFailed: getCodeFn(status.OFFICIAL.HTTP_EXPECTATION_FAILED),
  iAmATeapot: getCodeFn(status.OFFICIAL.HTTP_I_AM_A_TEAPOT),
  misdirectedRequest: getCodeFn(status.OFFICIAL.HTTP_MISDIRECTED_REQUEST),
  unprocessableEntity: getCodeFn(status.OFFICIAL.HTTP_UNPROCESSABLE_ENTRY),
  locked: getCodeFn(status.OFFICIAL.HTTP_LOCKED),
  failedDependency: getCodeFn(status.OFFICIAL.HTTP_FAILED_DEPENDENCY),
  tooEarly: getCodeFn(status.OFFICIAL.HTTP_TOO_EARLY),
  upgradeRequired: getCodeFn(status.OFFICIAL.HTTP_UPGRADE_REQUIRED),
  preconditionRequired: getCodeFn(status.OFFICIAL.HTTP_PRECONDITION_REQUIRED),
  tooManyRequests: getCodeFn(status.OFFICIAL.HTTP_TOO_MANY_REQUEST),
  requestHeaderFieldsTooLarge: getCodeFn(
    status.OFFICIAL.HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE
  ),
  unavailableForLegalReasons: getCodeFn(
    status.OFFICIAL.HTTP_UNAVAILABLE_FOR_LEGAL_REASONS
  ),

  // 5**
  internalServerError: getCodeFn(status.OFFICIAL.HTTP_INTERNAL_SERVER_ERROR),
  notImplemented: getCodeFn(status.OFFICIAL.HTTP_NOT_IMPLEMENTED),
  badGateway: getCodeFn(status.OFFICIAL.HTTP_BAD_GETEWAY),
  serviceUnavailable: getCodeFn(status.OFFICIAL.HTTP_SERVICE_UNAVAILABLE),
  gatewayTimeout: getCodeFn(status.OFFICIAL.HTTP_GATEWAY_TIMEOUT),
  httpVersionNotSupported: getCodeFn(
    status.OFFICIAL.HTTP_HTTP_VERSION_NOT_SUPPORTED
  ),
  variantAlsoNegotiates: getCodeFn(
    status.OFFICIAL.HTTP_VARIANT_ALSO_NEGOTIATES
  ),
  insufficientStorage: getCodeFn(status.OFFICIAL.HTTP_INSUFFICIENT_STORAGE),
  loopDetected: getCodeFn(status.OFFICIAL.HTTP_LOOP_DETECTED),
  notExtended: getCodeFn(status.OFFICIAL.HTTP_NOT_EXTENDED),
  networkAuthenticationRequired: getCodeFn(
    status.OFFICIAL.HTTP_NETWORK_AUTHENTICATION_REQUIRED
  ),
};

const unofficial: GoodStatus.Responses.Unofficial = {
  thisIsFine: getCodeFn(status.UNOFFICIAL.HTTP_THIS_IS_FINE),
  pageExpired: getCodeFn(status.UNOFFICIAL.HTTP_PAGE_EXPIRED),
  enhanceYourCalm: getCodeFn(status.UNOFFICIAL.HTTP_ENHANCE_YOUR_CALM),
  uRequestHeaderFieldsTooLarge: getCodeFn(
    status.UNOFFICIAL.HTTP_U_REQUEST_HEADER_FIELDS_TOO_LARGE
  ),
  blockedBywindowsParentalControls: getCodeFn(
    status.UNOFFICIAL.HTTP_BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS
  ),
  invalidToken: getCodeFn(status.UNOFFICIAL.HTTP_INVALID_TOKEN),
  tokenRequired: getCodeFn(status.UNOFFICIAL.HTTP_TOKEN_REQUIRED),
  bandwidthLimitExceeded: getCodeFn(
    status.UNOFFICIAL.HTTP_BANDWIDTH_LIMIT_EXCEEDED
  ),
  invalidSSLCertificate: getCodeFn(
    status.UNOFFICIAL.HTTP_INVALID_SSL_CERTIFICATE
  ),
  siteIsOverLoaded: getCodeFn(status.UNOFFICIAL.HTTP_SITE_IS_OVERLOADED),
  siteIsFrozen: getCodeFn(status.UNOFFICIAL.HTTP_SITE_IS_FROZEN),
  networkReadTimeoutError: getCodeFn(
    status.UNOFFICIAL.HTTP_NETWORK_READ_TIMEOUT_ERROR
  ),
};

const infoService: GoodStatus.Responses.InfoService = {
  loginTimeout: getCodeFn(
    status.INTERNET_INFORMATION_SERVICE.HTTP_LOGIN_TIME_OUT
  ),
  retryWith: getCodeFn(status.INTERNET_INFORMATION_SERVICE.HTTP_RETRY_WITH),
  ifRedirect: getCodeFn(status.INTERNET_INFORMATION_SERVICE.HTTP_REDIRECT),
};

const nginx: GoodStatus.Responses.Nginx = {
  noResponse: getCodeFn(status.NGINX.HTTP_NO_RESPONSE),
  headerTooLarge: getCodeFn(status.NGINX.HTTP_REQUEST_HEADER_TOO_LARGE),
  sslCertError: getCodeFn(status.NGINX.HTTP_SSL_CERTIFICATE_ERROR),
  sslCertRequired: getCodeFn(status.NGINX.HTTP_SSL_CERTIFICATE_REQUIRED),
  sentToHttpsPort: getCodeFn(status.NGINX.HTTP_REQUEST_SENT_TO_HTTPS_PORT),
  clientClosedRequest: getCodeFn(status.NGINX.HTTP_CLIENT_CLOSED_REQUEST),
};

const cloudflare: GoodStatus.Responses.Cloudflare = {
  webServerReturnedAnUnknownError: getCodeFn(
    status.CLOUDFLARE.HTTP_WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR
  ),
  webServerIsDown: getCodeFn(status.CLOUDFLARE.HTTP_WEB_SERVER_IS_DOWN),
  connectionTimedOut: getCodeFn(status.CLOUDFLARE.HTTP_CONNECTION_TIMED_OUT),
  originIsUnreachable: getCodeFn(status.CLOUDFLARE.HTTP_ORIGIN_IS_UNREACHABLE),
  aTimeoutOccurred: getCodeFn(status.CLOUDFLARE.HTTP_A_TIMEOUT_OCCURRED),
  sslHandshakeFailed: getCodeFn(status.CLOUDFLARE.HTTP_SSL_HANDSHAKE_FAILED),
  invalidSslCertificate: getCodeFn(
    status.CLOUDFLARE.HTTP_INVALID_SSL_CERTIFICATE
  ),
  railgunError: getCodeFn(status.CLOUDFLARE.HTTP_RAILGUN_ERROR),
  notLoggedIn: getCodeFn(status.CLOUDFLARE.HTTP_NOT_LOGGED_IN),
};

export { official, unofficial, infoService, nginx, cloudflare };
