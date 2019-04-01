## typescript socket.io tpl


## 
```text
远程测试流程：
@Godtoy 需要配合的项目：
1  提供监听事件名称和发送信息格式文档。
2  真机登录我提供的一个企业微信账号。
3  app链接我们提供的websocket服务器。调试成链接成功状态。
4  保持手机处于常亮 app可运行状态。


测试内容：
一、项目主功能：
1  自动通过好友请求。
2  服务端接收微信消息
3  服务端发送微信消息（指定个人/群发送文本、气泡链接、名片、图片）
4  服务端拉取全部联系人信息

二、项目稳定型：
1 持续24小时以上的长时间链接。
2 间隔10分钟发送消息。
3 不定时接收消息并反馈消息
```

## websocket.api文档
``` js
  /**
     * 主动注册到系统
     */
    client.on("wk.register", async (res) => {
        console.log(res);
    });

    /**
     * 收到新消息
     */
    client.on("wk.new_message", async (res) => {
        console.log(res);
    });


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
```
