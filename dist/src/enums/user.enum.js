"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTokenStatus = exports.UserTokenType = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["UNVERIFIED"] = "UNVERIFIED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var UserTokenType;
(function (UserTokenType) {
    UserTokenType["VERIFICATION_EMAIL"] = "VERIFICATION_EMAIL";
})(UserTokenType = exports.UserTokenType || (exports.UserTokenType = {}));
var UserTokenStatus;
(function (UserTokenStatus) {
    UserTokenStatus["ACTIVE"] = "ACTIVE";
    UserTokenStatus["INACTIVE"] = "INACTIVE";
})(UserTokenStatus = exports.UserTokenStatus || (exports.UserTokenStatus = {}));
