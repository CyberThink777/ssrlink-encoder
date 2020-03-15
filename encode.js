var Base64 = require('js-base64').Base64;

/* function Server(name, port, pass, method, remarks) {
    this.server = name;
    this.server_port = port;
    this.password = pass;
    this.method = method;
    this.remarks = remarks;
} */

// This function takes Server object and return ss link of this format
// ss://AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEFFFFFFFFFF1234567#This is a remarks
// from aes-256-cfb:thisispassword@wow.example:8080

function encode(server) {
    let sslink = `${server.method}:${server.password}@${server.server}:${server.server_port}`;
    sslink = Base64.encodeURI(sslink);
    return `ss://${sslink}#${server.remarks}`;
}

module.exports = encode;