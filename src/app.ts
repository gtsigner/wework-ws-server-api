import {SocketManager} from "./socket";

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

import config from "./config";
import startTask from "./task";

const app = new Koa();
const IO = require('koa-socket');
const socket = new IO({});

socket.attach(app);


app.context.config = config;
app.io.app = app;
app.io.manager = new SocketManager(app.io);

//基础包装
app.use(async (ctx: any, next: any) => {
    const {request, response} = ctx;
    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    response.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH");
    response.set("X-Powered-By", '3.2.1');
    //包装函数
    ctx.json = (data: any, status: number = 200) => {
        ctx.status = status;
        ctx.body = data;
    };
    //让options请求快速返回
    if (request.method == "OPTIONS") ctx.json({}, 200);
    else await next();
});


/**
 * 记录响应时间
 */
app.use(async (ctx: any, next: any) => {
    ctx.inputs = Object.assign(ctx.query, ctx.request.body);
    ctx.application = app;
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx: any, next: any) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.on('error', (err: any, ctx: any) => {
    console.error(err);
    ctx.body = err.message;
});


//末尾捕获异常
app.use(async (ctx: any) => {
    return ctx.json({message: '404 Not Found', code: 1001}, 404);
});

app.io.on('message', (ctx: any, data: object) => {
    console.log(`message: ${data}`)
});

//安装所有其他的事件程序
const LISTEN_PORT = config.server.port || 4000;

startTask(app);
app.listen(LISTEN_PORT, () => console.log(`Running on localhost：${LISTEN_PORT}`));

export default app;


