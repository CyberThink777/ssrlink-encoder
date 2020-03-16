use serde::Deserialize;
use std::fs;

#[derive(Deserialize)]
struct Server {
    server: String,
    server_port: u32,
    password: String,
    method: String,
    remarks: String,
}

pub fn run(filename: &str, group: &str) {
    let contents = fs::read_to_string(filename).expect("Something went wrong when reading files");
    let servers = parse(contents);
    let group_base_64 = base64::encode_config(group, base64::STANDARD_NO_PAD);
    for server in servers {
        encode_and_print(server, &group_base_64)
    }
}

fn parse(data: String) -> Vec<Server> {
    serde_json::from_str(&data).expect("Error parsing JSON!")
}

fn encode_and_print(server: Server, group: &String) {
    let pass = base64::encode_config(server.password, base64::STANDARD_NO_PAD);
    let remarks = base64::encode_config(server.remarks, base64::STANDARD_NO_PAD);
    let ssrlink = format!(
        "{}:{}:origin:{}:plain:{}/?remarks={}&group={}",
        server.server, server.server_port, server.method, pass, remarks, group
    );
    println!(
        "ssr://{}",
        base64::encode_config(ssrlink, base64::STANDARD_NO_PAD)
    );
}
