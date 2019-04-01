const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), "/config/config.json");
if (!fs.existsSync(filePath)) {
    console.error("配置文件不存在");
    process.exit(-1);
}
let config = fs.readFileSync(filePath);
config = JSON.parse(config);

const full = {
    jwtSecret: 'qR7mRHqlVO,ERflUmBrSd7Q{w}Qgom',
    home: '',
    server: {
        registry: '',
        port: 4000
    },
    pager: {
        limit: 14
    },
    app: {
        root: path.join(__dirname, '../'),
        debug: false,
        check: "జ్ఞ ‌ా"//这个可以用来检测好友删除
    },
    logger: {
        path: "./logs"
    }
};
export default {...full, ...config};