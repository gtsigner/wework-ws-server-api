import {ClientTypes, SocketManager} from "./socket";
import {events} from "./socket/types";

const schedule = require('node-schedule');

process.env.DEBUG = "socket.io:*";
export default function startTask(app: any) {
    const manager: SocketManager = app.io.manager;
    const job = schedule.scheduleJob('*/4 * * * * *', async () => {
        const clients = manager.getClientList();
        manager.socket.emit(events.PONG, {});
        clients.forEach(client => {
            if (client.clientType !== ClientTypes.wework) {
                return false
            }

            //获取会话列表
            // client.socket.emit("wk.get_conversation_list", {}, (data) => {
            //     if (data != '') {
            //         data = JSON.parse(data);
            //         console.log(data[0]);
            //     }
            // });


            //获取客户列表
            // client.socket.emit("wk.get_customer_list", {}, (data) => {
            //     if (data != '') {
            //         console.log(data);
            //     }
            // });


            //获取当前用户
            // client.socket.emit("wk.get_now_user", {}, (data) => {
            //     if(data != '') {
            //         data = JSON.parse(data);
            //         console.log(data);
            //     }
            // });


            //获取企业通讯录
            // client.socket.emit("wk.get_corp_member_list", {}, (data) => {
            //     if(data != '') {
            //         data = JSON.parse(data);
            //         console.log(data);
            //     }
            // });


            //获取会话成员
            // client.socket.emit("wk.get_conversation_member_list",
            // {
            //     "remoteId": "1970325075060956" //会话id
            // }, (data) => {
            //     if(data != '') {
            //         data = JSON.parse(data);
            //         console.log(data);
            //     }
            // });


            //发送文本消息到会话
            // client.socket.emit("wk.send_text_message_to_conversation", {
            //     "remoteId": "7881302187914621", //会话id
            //     "textMessage": "你好，这是测试文本消息" //文本消息
            // });


            //发送文本消息到个人
            // client.socket.emit("wk.send_text_message_to_member", {
            //     "remoteId": "1688851301431977", //用户id
            //     "textMessage": "你好，这是测试文本消息" //文本消息
            // });


            //发送名片到会话
            // client.socket.emit('wk.send_personal_card_message_to_conversation', {
            //     remoteId: '7881302187914621',//会话id
            //     wantSenduserRemoteId: '7881302187914621',//用户id
            // })


            // 发送名片到用户
            // client.socket.emit('wk.send_personal_card_message_to_member', {
            //     remoteId: '1688851301431977', //用户id
            //     wantSenduserRemoteId: '1688851301402623', //用户id
            // })


            //发送卡片链接到会话
            // client.socket.emit('wk.send_link_message_to_conversation', {
            //     remoteId: '7881302187914621', //会话id
            //     title: '123', //标题
            //     desc: '123', //描述
            //     url: '123', //链接
            //     imageUrl: '123' //图片url
            // })


            //发送卡片链接到成员
            // client.socket.emit('wk.send_link_message_to_member', {
            //     remoteId: '1688851301431977', //用户id
            //     title: '123', //标题
            //     desc: '123', //描述
            //     url: '123', //链接
            //     imageUrl: '123' //图片url
            // })


        });
    });
}
