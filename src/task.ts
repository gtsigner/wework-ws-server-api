import {ClientTypes, SocketManager} from "./socket";

const schedule = require('node-schedule');


export default function startTask(app: any) {
    const manager: SocketManager = app.io.manager;
    const job = schedule.scheduleJob('*/5 * * * * *', async () => {
        const clients = manager.getClientList();
        clients.forEach(client => {
            if (client.clientType !== ClientTypes.wework) {
                return false
            }
            
            //获取会话列表
            // client.socket.emit("wk.get_conversation_list", {}, (data) => {
            //     console.log(data);
            // });

            //获取客户列表
            // client.socket.emit("wk.get_customer_list", {}, (data) => {
            //     console.log(data);
            // });

            //获取当前用户
            // client.socket.emit("wk.get_now_user", {}, (data) => {
            //     console.log(data);
            // });

            //获取企业通讯录
            // client.socket.emit("wk.get_corp_member_list", {}, (data) => {
            //     console.log(data);
            // });

            //获取会话成员
            // client.socket.emit("wk.get_conversation_member_list", {"remoteId":2300036843}, (data) => {
            //     console.log(data);
            // });

            //发送文本消息到会话 NodeJs 存不下conversationId
            client.socket.emit("wk.send_text_message_to_conversation", {"conversationId":"6674388697017432933", "textMessage": "你好，这是测试文本消息"});
        });
    });
}
