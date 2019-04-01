export const events = {
    SEND_USER_INFO: 'send.user_info',

    PONG: 'pong',
    broadcast: 'broadcast',
    RECV_MESSAGE: 'recv.message',

    WX_MESSAGE: 'wx.message',

    //收到用户信息的消息
    WX_GET_USER_INFO: 'wx.get_current_user',

    WX_DISCONNECT: 'wx.disconnect',

    CMD_SEND_MESSAGE: 'cmd.send_message',
    CMD_GET_LOGIN_USER: 'cmd.get_login_user',
    //
    WX_GET_USER_RESULT: 'wx.get_user_result',
    WX_GET_ROOM_RESULT: 'wx.get_room_user_list_result',

    //获取微信的用户信息
    WX_CMD_USER_INFO: 'wx.cmd.user_info',

    //让微信发送消息
    WX_CMD_SEND_MESSAGE: 'wx.cmd.send_message',
    //名片
    WX_CMD_SEND_CARD_MESSAGE: 'wx.cmd.send_card_message',
    //语音
    WX_CMD_SEND_VOICE_MESSAGE: 'wx.cmd.send_voice_message',
    //xml
    WX_CMD_SEND_XML_MESSAGE: 'wx.cmd.send_xml_message',
    //图片
    WX_CMD_SEND_IMAGE_MESSAGE: 'wx.cmd.send_image_message',


    //获取好友列表
    WX_CMD_GET_ROOM_USERS: 'wx.cmd.get_room_users_by_wxid',

    //通过wxid获取信息
    WX_CMD_GET_USER_BY_WID: 'wx.cmd.get_user_by_wid',
    //让微信退出
    WX_CMD_KILL: 'wx.cmd.kill',

    //微信退出
    WX_CMD_EXIT: 'wx.cmd.exit',

    DISCONNECT: 'disconnect',
    CONNECT: 'connect',
};