import {events} from "./types";
import {ClientTypes, SocketManager} from "../index";
import {WrapperClients, WrapperWeWork} from "./route";

const consola = require('consola');

export class ClientManager {
    public readonly context: any;
    public readonly socket: any;
    public readonly client: any;
    public readonly query: any;
    public readonly clientType: ClientTypes;
    public readonly id: string;
    public readonly server: SocketManager;
    public accountId: string = "";
    public readonly app: any;
    //会话的群
    public conversation: any = null;

    constructor(context: any, server: SocketManager) {
        this.app = server.app;
        //检查是否存在了微信主号客户端，有的话，就不注册任何事件
        const client = context.socket;
        const handshake = client.handshake;
        const {query, headers} = handshake;
        this.clientType = query.client_type;
        this.socket = client;
        this.client = client;
        context.manager = this;
        this.context = context;
        this.query = query;
        this.id = client.id;
        this.server = server;
        switch (this.clientType) {
            case ClientTypes.client:
                consola.info(`游戏客户端: ${client.id} 进入了服务器，信息：${JSON.stringify(query)} `);
                break;
            case ClientTypes.wechat:
                consola.info(`微信端已启动: ${client.id} 进入了服务器，信息：${JSON.stringify(query)} `);
                break;
            case ClientTypes.wework:
                consola.info(`企业微信端已启动: ${client.id} 进入了服务器，信息：${JSON.stringify(query)} `);
                break;
            default:
                consola.info(`None客户端: ${client.id} 进入了服务器，信息：${JSON.stringify(query)} `);
                break;
        }
        this.init();
    }

    init() {
        const client = this.socket;
        client.on('disconnect', () => {
            this.server.removeClient(this.id)
        });

        client.on('broadcast', () => {
            consola.info("收到广播");
        });

        client.on(events.PONG, () => {

        });
        if (this.clientType === ClientTypes.wework) {
            WrapperWeWork(this);
        }
        if (this.clientType === ClientTypes.client) {
            WrapperClients(this)
        }
        client.broadcast.emit('client.in', {client: client.id});
    }


    /**
     * 指定接受会话发送消息
     * @param conversationId
     * @param message
     * @param ats
     */
    public sendTextMessage(conversationId: string, message: string, ats: string[] = []) {
        const data = {id: conversationId, message: message, ats};
        this.socket.emit('wk.send.text_message', data)
    }
}
