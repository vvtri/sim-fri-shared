"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReadInfoStatus = exports.ConversationMemberRole = exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType["TEXT"] = "TEXT";
    MessageType["FILE"] = "FILE";
    MessageType["IMAGE"] = "IMAGE";
    MessageType["CALL"] = "CALL";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ConversationMemberRole;
(function (ConversationMemberRole) {
    ConversationMemberRole["ADMIN"] = "ADMIN";
    ConversationMemberRole["MEMBER"] = "MEMBER";
})(ConversationMemberRole = exports.ConversationMemberRole || (exports.ConversationMemberRole = {}));
var MessageReadInfoStatus;
(function (MessageReadInfoStatus) {
    MessageReadInfoStatus["READ"] = "READ";
    MessageReadInfoStatus["UNREAD"] = "UNREAD";
})(MessageReadInfoStatus = exports.MessageReadInfoStatus || (exports.MessageReadInfoStatus = {}));
