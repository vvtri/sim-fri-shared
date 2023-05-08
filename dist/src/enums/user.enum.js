"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileRelationshipStatus = exports.UserTokenStatus = exports.UserTokenType = exports.UserStatus = void 0;
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
var UserProfileRelationshipStatus;
(function (UserProfileRelationshipStatus) {
    UserProfileRelationshipStatus[UserProfileRelationshipStatus["SINGLE"] = 0] = "SINGLE";
    UserProfileRelationshipStatus[UserProfileRelationshipStatus["IN_RELATIONSHIP"] = 1] = "IN_RELATIONSHIP";
    UserProfileRelationshipStatus[UserProfileRelationshipStatus["MARRIED"] = 2] = "MARRIED";
    UserProfileRelationshipStatus[UserProfileRelationshipStatus["SECRET"] = 3] = "SECRET";
})(UserProfileRelationshipStatus = exports.UserProfileRelationshipStatus || (exports.UserProfileRelationshipStatus = {}));
