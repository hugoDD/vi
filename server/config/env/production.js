'use strict';

// 生产环境配置
// =================================
module.exports = {
    port:     process.env.PORT || 8100,
    mysql: {
        host: 'localhost',
        port: '3307',
        user: 'root',
        password: '123456',
        database:'vi'
    },
    mongo: {
        uri: 'mongodb://localhost:27017/docker-pro'
    },
    seedDB: true
};
