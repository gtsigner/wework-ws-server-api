const path = require('path');
const fs = require('fs');


const lock = path.join(process.cwd(), '/config/lock.lock');

export async function isLockExtist() {
    return fs.existsSync(lock);
}

export async function writeLock() {
    return fs.writeFileSync(lock, "1");
}