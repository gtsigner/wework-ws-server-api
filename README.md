## typescript socket.io tpl

## 功能 2.7.6
```text
服务器可以通过web socket api向指定微信好友或者群发送指定类型消息和命令。
 
-   自动通过好友请求。
-   服务端接收微信消息（系统消息、群聊消息、个人消息、添加好友推送）
-   服务端发送微信消息（指定个人/群发送文本、气泡链接、名片、图片）
-   服务端拉取全部联系人信息
-   服务端拉取全部客户联系人
-   服务端拉取全部企业通讯录
-   搜索手机号或者微信号自动添加好友

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
            // client.socket.emit("wk.get_conversation_member_list", {"remoteId":x}, (data) => {
            //     console.log(data);
            // });

            //发送文本消息到会话 NodeJs 存不下conversationId
            client.socket.emit("wk.send_text_message_to_conversation", {"conversationId":"x", "textMessage": "你好，这是测试文本消息"});
```
