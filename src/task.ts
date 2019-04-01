import {ClientTypes, SocketManager} from "./socket";

const schedule = require('node-schedule');

// process.env.DEBUG = "socket.io:*";
export default function startTask(app: any) {
    const manager: SocketManager = app.io.manager;
    const job = schedule.scheduleJob('*/3 * * * * *', async () => {
        const clients = manager.getClientList();
        clients.forEach(client => {
            if (client.clientType !== ClientTypes.wework) {
                return false
            }
            //获取会话列表
            // client.socket.emit("wk.get_conversation_list", {}, (data) => {
            //     data = JSON.parse(data);
            //     console.log(data);
            // });

            //1970324956066707
            // 7881303265912780

            // //获取客户列表
            // client.socket.emit("wk.get_customer_list", {}, (data) => {
            //     data = JSON.parse(data);
            //     //数据格式
            //     // [{ avatorUrl:
            //     //     'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7ZnkLia1loPsEImb0qCH3nA9wnibgYo5AttkK6hBq7qMog/0',
            //     //         corpid: 1970325134026788,
            //     //     name: '普普',
            //     //     remoteId: 7881303265912780 } ]
            //     console.log(data);
            // });

            // //获取当前用户
            // client.socket.emit("wk.get_now_user", {}, (data) => {
            //     console.log(data);
            // });

            // // //获取企业通讯录 OK
            client.socket.emit("wk.get_corp_member_list", {}, (data) => {
                data = JSON.parse(data);
                console.log(data);
            });


            // //获取会话成员
            // client.socket.emit("wk.get_conversation_member_list", {"remoteId": 1970324956066707}, (data) => {
            //     data = JSON.parse(data);
            //     console.log(data);
            // });

            //发送文本消息到会话 NodeJs 存不下conversationId 的long
            client.socket.emit("wk.send_text_message_to_conversation", {
                "conversationId": "7881303265912780",
                "textMessage": "你好，这是测试文本消息"
            });

            //发送卡片链接
            // client.socket.emit('wk.send_link_message_to_conversation', {
            //     conversationId: '7881303265912780',//如果传入是会话ID，就发送到会话群
            //     title: '123',
            //     desc: '123',
            //     url: '123',
            //     imageUrl: '123'
            // })

            // 发送名片链接到会话
            // client.socket.emit('wk.send_personal_card_message_to_conversation', {
            //     conversationId: '7881303265912780',//如果传入是会话ID，就发送到会话群
            //     wantSenduserRemoteId: '1688851164436708',//这个是通讯的remoteID
            // })
            //
            //
            // // 发送到用户
            client.socket.emit('wk.send_personal_card_message_to_member', {
                remoteId: '1688851164438250',//如果传入是会话ID，就发送到会话群
                wantSenduserRemoteId: '1688851164438250',//这个是通讯的remoteID
            })

        });
    });
}
