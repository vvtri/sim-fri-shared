"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotiSenderType = exports.NotiTemplateType = exports.NotiType = void 0;
var NotiType;
(function (NotiType) {
    NotiType["COMMENT"] = "COMMENT";
    NotiType["LIKE"] = "LIKE";
})(NotiType = exports.NotiType || (exports.NotiType = {}));
var NotiTemplateType;
(function (NotiTemplateType) {
    NotiTemplateType["COMMENT"] = "COMMENT";
    NotiTemplateType["MENTION"] = "MENTION";
    NotiTemplateType["LIKE"] = "LIKE";
})(NotiTemplateType = exports.NotiTemplateType || (exports.NotiTemplateType = {}));
var NotiSenderType;
(function (NotiSenderType) {
    NotiSenderType["USER"] = "USER";
})(NotiSenderType = exports.NotiSenderType || (exports.NotiSenderType = {}));
