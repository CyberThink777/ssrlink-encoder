const encode = require('./encode');
const process = require('process');
const fs = require('fs');

const argv = process.argv;
if (argv.length < 3) {
    console.error('Usage: npm start [FILE] [Group Name]');
    process.exit();
}
const filename = argv[2];
const group = typeof argv[3] !== 'undefined' ? argv[3] : 'Untitled';

let servers = fs.readFileSync(filename, 'utf8');
servers = JSON.parse(servers);
servers.forEach(server => {
    delete server.route;
    delete server.remote_dns;
    delete server.ipv6;
    delete server.proxy_apps;
    delete server.udpdns;
    server.group = group;
    console.log(encode(server));
});