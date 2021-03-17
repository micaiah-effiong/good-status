# Changelog

All notable changes to this project will be documented in this file

This project adheres to [Sematic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.0 - 2021-03-17

### Added
 - CHANGELOG.MD
 - Full offical status code
 - Unofficial status code
 - Configuration for use unofficial status code

### Changed
 - Use off unofficial status code is optional

## 1.0.0 - 2021-02-28

### Added
 - Create the middleware to add the following methods to the response object for send status code
   - ok
   - created
   - badRequest
   - forbidden
   - notFound
   - conflict
   - invalidToken
   - serverError
   - badGateway
   - serviceUnavailable
 - README that explains the middleware and adds examples