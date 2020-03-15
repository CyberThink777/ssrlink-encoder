let encode = require('./encode');

let servers = JSON.parse(`[{
    "server": "c11001.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u6df1\u5733 - \u9999\u6e2f \u221e (0.1 \u500d\u7387) #Daily #Asia",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}, {
    "server": "c11002.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u6df1\u5733 - \u65b0\u52a0\u5761 \u221e (0.1 \u500d\u7387) #Daily #Asia",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}, {
    "server": "c11003.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u6df1\u5733 - \u53f0\u5317 \u221e (0.1 \u500d\u7387) #Daily #Asia",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}, {
    "server": "c12003.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u676d\u5dde - \u9999\u6e2f \u221e (0.1 \u500d\u7387) #Daily #Asia",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}, {
    "server": "c12001.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u676d\u5dde - \u4e1c\u4eac \u221e (0.1 \u500d\u7387) #Daily #Asia",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}, {
    "server": "c12002.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u676d\u5dde - \u7845\u8c37 \u221e (0.1 \u500d\u7387) #Daily #North America",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}, {
    "server": "c13003.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u5317\u4eac - \u9999\u6e2f \u221e (0.1 \u500d\u7387) #Daily #Asia",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}, {
    "server": "c13004.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u5317\u4eac - \u4e1c\u4eac \u221e (0.1 \u500d\u7387) #Daily #Asia",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}, {
    "server": "c13002.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u5317\u4eac - \u4f26\u6566 \u221e (0.1 \u500d\u7387) #Daily #Europe",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}, {
    "server": "c13001.nyancat.life",
    "server_port": 10395,
    "password": "j1D3NFRuqXDs",
    "method": "aes-256-cfb",
    "remarks": "\u5317\u4eac - \u6cd5\u5170\u514b\u798f \u221e (0.1 \u500d\u7387) #Daily #Europe",
    "route": "bypass-lan-china",
    "remote_dns": "8.8.8.8",
    "ipv6": false,
    "proxy_apps": {
        "enabled": false
    },
    "udpdns": false
}]`)
servers.forEach(server => {
    delete server.route;
    delete server.remote_dns;
    delete server.ipv6;
    delete server.proxy_apps;
    delete server.udpdns;
});
let tmp = [];
servers.forEach(server => {
    tmp.push(encode(server))
})
tmp.forEach(ss => {
    console.log(ss)
})