"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WS_MESSAGE_EVENT = exports.WS_MESSAGE_NAMESPACE = void 0;
exports.WS_MESSAGE_NAMESPACE = {
    CHAT: 'chat',
    CALL: 'call',
};
exports.WS_MESSAGE_EVENT = {
    WELCOME: 'welcome',
    MESSAGE_SENT: 'message_sent',
    MESSAGE_VIEWED: 'message_viewed',
    CONVERSATION_CREATED: 'conversation_created',
    JOIN_ROOM: 'join_room',
    JOINED_ROOM: 'joined_room',
    SEND_SIGNAL: 'send_signal',
    NEW_USER_JOINED: 'new_user_joined',
    SEND_RETURN_SIGNAL: 'send_return_signal',
    RECEIVE_RETURN_SIGNAL: 'receive_return_signal',
    INVALID_CALL: 'invalid_call',
    USER_LEFT_ROOM: 'user_left_room',
    LEAVE_CALL: 'leave_call',
    MUTE_MIC: 'mute_mic',
    OFF_CAMERA: 'off_camera',
};
