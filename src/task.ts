import {ClientTypes, SocketManager} from "./socket";

const schedule = require('node-schedule');

// process.env.DEBUG = "socket.io:*";
export default function startTask(app: any) {
    const manager: SocketManager = app.io.manager;
    const job = schedule.scheduleJob('*/8 * * * * *', async () => {
        const clients = manager.getClientList();
        clients.forEach(client => {
            if (client.clientType !== ClientTypes.wework) {
                return false
            }

            //获取会话列表
            /**
             * [ { avaterList:
                    [ 'http://p.qlogo.cn/bizmail/PyEchU8bGErU2HIPAicOw8HCicq1msAmiaIbibsJNjWCkh8WVtNTPaicTicg/0',
                    'http://p.qlogo.cn/bizmail/OvibibBYV1LRbzCvtRXOkyyxIajef1DmKCwkD5ibANHE7A9LibTZyAGp6A/0',
                    'http://p.qlogo.cn/bizmail/NliaX1sSWmlFicqxEqic2UzH9smFsUBNibickEqU0xvtG20MzVmjb7UYfvQ/0',
                    '' ],
                    conversationId: 6674388697017433000,
                    count: 4,
                    cropId: 0,
                    defaultName: 'Godtoy、小岚菜奈、曾颐楠、赵俊',
                    name: '抱抱抱',
                    remoteId: 2300036843 }
                { avaterList:
                    [ 'http://wx.qlogo.cn/mmhead/LTpwfH82riclbUbpFibiaIakgqfhH2d73lcetwV1kknsAfOZUcQc2NI9g/0' ],
                    conversationId: 6674388701312400000,
                    count: 1,
                    cropId: 0,
                    defaultName: '曾颐楠',
                    name: '曾颐楠',
                    remoteId: 7881299744907850 }
                ]
             */
            // client.socket.emit("wk.get_conversation_list", {}, (data) => {
            //     if(data != '') {
            //         data = JSON.parse(data);
            //         console.log(data);
            //     }
            // });


            //获取客户列表
            /**
             * [ { avatorUrl:'http://wx.qlogo.cn/mmhead/LTpwfH82riclbUbpFibiaIakgqfhH2d73lcetwV1kknsAfOZUcQc2NI9g/0',
                    corpid: 1970325134026788,
                    name: '曾颐楠',
                    remoteId: 7881299744907850 } 
                ]
             */
            // client.socket.emit("wk.get_customer_list", {}, (data) => {
            //     if(data != ''){
            //        c
            //         console.log(data);
            //     }
            // });



            //获取当前用户
            /**
             * { avatorUrl:
                'http://p.qlogo.cn/bizmail/OvibibBYV1LRbzCvtRXOkyyxIajef1DmKCwkD5ibANHE7A9LibTZyAGp6A/0',
                corpid: 1970325075060956,
                name: '曾颐楠',
                remoteId: 1688851301414050 }
             */
            // client.socket.emit("wk.get_now_user", {}, (data) => {
            //     if(data != '') {
            //         data = JSON.parse(data);
            //         console.log(data);
            //     }
            // });


            //获取企业通讯录
            /**
             * [ { avatorUrl:
                    'https://p.qlogo.cn/bizmail/gX0IX7hMvBN747k8Ps4Q0iaGlJib9qwpSMLHc0TwyB1XiaepibPTjfjJEA/0',
                    corpid: 1970325075060956,
                    name: '大哥',
                    remoteId: 1688851301431977 },
                { avatorUrl:
                    'http://p.qlogo.cn/bizmail/OvibibBYV1LRbzCvtRXOkyyxIajef1DmKCwkD5ibANHE7A9LibTZyAGp6A/0',
                    corpid: 1970325075060956,
                    name: '曾颐楠',
                    remoteId: 1688851301414050 } ]
             */
            // client.socket.emit("wk.get_corp_member_list", {}, (data) => {
            //     if(data != '') {
            //         data = JSON.parse(data);
            //         console.log(data);
            //     }
            // });


            //获取会话成员
            /**
             * [ { avatorUrl:
                    'http://p.qlogo.cn/bizmail/PyEchU8bGErU2HIPAicOw8HCicq1msAmiaIbibsJNjWCkh8WVtNTPaicTicg/0',
                    corpid: 1970325075060956,
                    name: 'Godtoy',
                    remoteId: 1688851301402623 },
                { avatorUrl:
                    'https://p.qlogo.cn/bizmail/gX0IX7hMvBN747k8Ps4Q0iaGlJib9qwpSMLHc0TwyB1XiaepibPTjfjJEA/0',
                    corpid: 1970325075060956,
                    name: '大哥',
                    remoteId: 1688851301431977 } ]
             */
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
            //     "remoteId": "1970325075060956", //会话id
            //     "textMessage": "你好，这是测试文本消息" //文本消息
            // });


            //发送文本消息到个人
            // client.socket.emit("wk.send_text_message_to_member", {
            //     "remoteId": "1688851301431977", //用户id
            //     "textMessage": "你好，这是测试文本消息" //文本消息
            // });


            //发送名片到会话
            // client.socket.emit('wk.send_personal_card_message_to_conversation', {
            //     remoteId: '1970325075060956',//会话id
            //     wantSenduserRemoteId: '1688851301431977',//用户id
            // })
            
            
            // 发送名片到用户
            // client.socket.emit('wk.send_personal_card_message_to_member', {
            //     remoteId: '1688851301431977', //用户id
            //     wantSenduserRemoteId: '1688851301402623', //用户id
            // })


            //发送卡片链接到会话
            // client.socket.emit('wk.send_link_message_to_conversation', {
            //     remoteId: '1970325075060956', //会话id
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
