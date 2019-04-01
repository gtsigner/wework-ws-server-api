import WeWork from "../../src/core/wework/wework";

const weWork = new WeWork();

async function test() {
    const app = {
        id: 'ww52f49ac79a190e44',
        contact: 'Xd_NqKIgcjdMY7zcYgx-lemBhx1p2lHqbAiQBEWc874',
        app: 'ue9riOF02Qi9TF3FhziFS5sj_pdYkeC5Itz9Xp3j1yE',
    };
    // const app = {
    //     id: 'wwb23532b0e06a4cc6',
    //     contact: 'U1SZ0saObZLOpknDKCD0sJvT7FTAaFLU84wrlWVzmXs',
    //     app: '',
    // };

    //通讯录的accessToken
    let res = await weWork.getAccessToken(app.id, app.contact);
    const contact_access_token = res.data.access_token;
    //app的token
    res = await weWork.getAccessToken(app.id, app.app);
    //应用的token
    const app_access_token = res.data.access_token;
    //部门ID=1的时候
    const depers = await weWork.getDepartmentList(contact_access_token, 1);
    const userList = await weWork.getUserSimpleList(contact_access_token, 1);
    console.log(userList);
    const userIds = userList.map((u) => {
        return u.userid;
    });
    console.log(userIds);
    let ret = await weWork.messageSendTextToChat(app_access_token, "qunliao1", "@小宝贝  qunliao_1");
    ret = await weWork.messageSendTextToChat(app_access_token, "qunliao2", "@信仰  fuck you baby");
    console.log(ret);
    ret = await weWork.appchatGet(app_access_token, "qunliao1");
    console.log(ret);
}


test().then(res => {


});