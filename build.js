const {compile} = require('nexe')

compile({
    input: './build/app.js',
    // build: true, //required to use patches
    output: './release/server.exe',
    make: ['release'],
    resources: ['./config/**/*'],
    ico: './config/logo.ico',
    // build: true
}).then(() => {
    console.log('success')
})