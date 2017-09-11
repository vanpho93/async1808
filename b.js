const request = require('request');

function getIp(cb) {
    request('http://ip.jsontest.com/', (err, res, body) => {
        cb(body); // console.log(body)
    });
}

getIp(x => console.log(x));
