"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotiSenderType = exports.NotiType = void 0;
var NotiType;
(function (NotiType) {
    NotiType["POST_REACTION"] = "POST_REACTION";
    NotiType["COMMENT_POST"] = "COMMENT_POST";
    NotiType["COMMENT_REACTION"] = "COMMENT_REACTION";
    NotiType["REPLY_COMMENT"] = "REPLY_COMMENT";
    NotiType["NEW_FRIEND_REQUEST"] = "NEW_FRIEND_REQUEST";
    NotiType["FRIEND_REQUEST_ACCEPTED"] = "FRIEND_REQUEST_ACCEPTED";
})(NotiType = exports.NotiType || (exports.NotiType = {}));
var NotiSenderType;
(function (NotiSenderType) {
    NotiSenderType["USER"] = "USER";
})(NotiSenderType = exports.NotiSenderType || (exports.NotiSenderType = {}));
