import {events} from "../src/socket/events/types";

const SocketClient = require('socket.io-client');
const client = SocketClient('ws://127.0.0.1:3008?token=game');


client.on('connect', function () {
    console.log("Connected");
});
client.on('disconnect', function () {
    console.log("DisConnect")
});
client.on(events.CMD_SEND_MESSAGE, (res: any) => {
    console.log(res);
});
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', async (line: any) => {
    await client.emit('wx.message', JSON.stringify({
        nickname: '群聊',
        wxid: '9223372041393544365@im.chatroom',
        senderId: 'zhaojunlike',
        senderName: 'Godtoy',
        message: line,
    }));
    console.log("message:", line)
});
