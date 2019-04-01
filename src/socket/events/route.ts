import {ClientManager} from "./client";
import {events} from "./types";

export interface RecvMessage {
    id: string,
    nickname: string,
    conversationId: string,//收到的消息
    conversationType: number,
    senderId: string,
    sender?: any,
    conversation?: any,
    sendTime: number,
    messageType: number,
    message: string,
}


/**
 * client_id
 * @param manager
 * @constructor
 */
export function WrapperWeWork(manager: ClientManager) {
    const {client, server} = manager;
    let timer: number = 0;
    let isLogin = false;


    client.emit('w.getlll',{},(res)=>{
        console.log(res);
    });

    /**
     * 主动注册到系统
     */
    client.on("wk.register", async (res) => {
        try {
            const user = JSON.parse(res.user);
            const list = JSON.parse(res.list);
            if (!user || !list) {
                return
            }
            console.log(user, list);
        } catch (e) {
            manager.app.logger.error(e);
        }
    });


    //客户端消息
    client.on("wk.receive.message", async (message: any) => {
        const myMsg: RecvMessage = JSON.parse(message);
        if (!myMsg.sender) return;
        myMsg.senderId = myMsg.sender.id.toString();
        manager.app.logger.info(`收到消息：${myMsg.message}，昵称：${myMsg.sender.name}，ID：${myMsg.senderId}`);
    });

    //断开链接
    client.on('disconnect', () => {
        timer && clearInterval(timer);
        isLogin = false;
        console.error(`${manager.clientType} 已离线`);
    });

    client.on(events.CONNECT, () => {

    });

    //用户登录
    client.on("UserLogin", (data: any, ack: any) => {
        console.log("用户状态", data);
        ack("确认消息")
    })
}


export function WrapperClients(manager: ClientManager) {

}
