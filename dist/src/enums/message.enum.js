"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReactionType = exports.MessageReadInfoStatus = exports.ConversationMemberRole = exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType["TEXT"] = "TEXT";
    MessageType["FILE"] = "FILE";
    MessageType["IMAGE"] = "IMAGE";
    MessageType["CALL"] = "CALL";
    MessageType["SYSTEM"] = "SYSTEM";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ConversationMemberRole;
(function (ConversationMemberRole) {
    ConversationMemberRole["OWNER"] = "OWNER";
    ConversationMemberRole["ADMIN"] = "ADMIN";
    ConversationMemberRole["MEMBER"] = "MEMBER";
})(ConversationMemberRole = exports.ConversationMemberRole || (exports.ConversationMemberRole = {}));
var MessageReadInfoStatus;
(function (MessageReadInfoStatus) {
    MessageReadInfoStatus["READ"] = "READ";
    MessageReadInfoStatus["UNREAD"] = "UNREAD";
})(MessageReadInfoStatus = exports.MessageReadInfoStatus || (exports.MessageReadInfoStatus = {}));
var MessageReactionType;
(function (MessageReactionType) {
    MessageReactionType["LIKE"] = "LIKE";
    MessageReactionType["LOVE"] = "LOVE";
    MessageReactionType["ANGRY"] = "ANGRY";
})(MessageReactionType = exports.MessageReactionType || (exports.MessageReactionType = {}));
