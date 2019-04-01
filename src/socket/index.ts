import {ClientManager} from "./events/client";
import {events} from "./events/types";
import {objectToArray} from "../utils/arr";

export enum ClientTypes {
    wechat = 'wechat',
    wework = 'wework',
    client = 'client',
}

process.env.DEBUG = "socket.io:*";
export class SocketManager {
    public readonly clients: any = {};
    public readonly io: any;
    public readonly socket: any;
    public readonly app: any;

    constructor(io: any) {
        this.io = io;
        this.app = io.app;
        this.socket = io.socket;
        io.on('connection', (context: any) => {
            const manager = new ClientManager(context, this);
            this.clients[manager.id] = manager;
        });
    }

    public removeClient(id) {
        this.clients[id] && delete this.clients[id]
    }

    /**
     * 添加一个客户端
     * @param id
     * @param manager
     */
    public addClient(id: string, manager: ClientManager) {
        this.clients[id] = manager
    }


    /**
     * 获取账户信息
     * @param accountId
     * @param type
     */
    public getClient(accountId: string, type: ClientTypes = ClientTypes.wework): ClientManager {
        const clients = this.getClientList();
        for (let i = 0; i < clients.length; i++) {
            const client = clients[i];
            if (client.accountId == accountId && client.clientType === type) {
                return client;
            }
        }
        return null;
    }

    /**
     * 获取账户信息
     * @param accountId
     * @param type
     */
    public getClientsByAcTp(accountId: string, type: ClientTypes): ClientManager[] {
        const clients = this.getClientList();
        const list: ClientManager[] = [];
        clients.forEach((client) => {
            if (client.accountId == accountId && client.clientType === type) {
                return list.push(client);
            }
        });
        return list;
    }


    public getClients(): any {
        return this.clients;
    }

    /**
     *获取客户端列表
     */
    public getClientList(): ClientManager[] {
        return objectToArray(this.clients);
    }

    /**
     * 获取客户端管理器
     * @param id socket_id
     */
    public getClientManager(id: string): ClientManager {
        return this.clients[id] ? this.clients[id] : null;
    }


    /**
     * 发送消息
     * @param accountId
     * @param conversationId
     * @param message
     * @param ats
     */
    public sendMessageToConversation(accountId: string, conversationId: string, message: any, ats: string[] = []): boolean {
        const clientManager: ClientManager = this.getClient(accountId, ClientTypes.wework);
        if (!clientManager) {
            this.app.logger.error(`没找到对应的企业微信客户端:${accountId}`);
            return false
        }
        clientManager.sendTextMessage(conversationId, message, ats);
        return true;
    }
}
