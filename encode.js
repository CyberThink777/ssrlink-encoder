var Base64 = require('js-base64').Base64;
Base64.extendString();
/* structure Server {
    this.server
    this.server_port
    this.password
    this.method
    this.remarks
    this.group
} */

// This function takes Server object and return ssr link

function encode(server) {
    let ssrlink = `${server.server}:${server.server_port}:origin:${server.method}:plain:${server.password.toBase64URI()}/?remarks=${server.remarks.toBase64URI()}&group=${server.group.toBase64URI()}`;
    ssrlink = Base64.encodeURI(ssrlink);
    return `ssr://${ssrlink}`;
}

module.exports = encode;