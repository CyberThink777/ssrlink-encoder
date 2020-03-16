use serde::{Deserialize};
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
}

fn parse(data: String) -> Vec<Server> {
    serde_json::from_str(&data).expect("Error parsing JSON!")
}

/* fn encode_and_print(servers: Server, group: &str) {
    let ssrlink;
} */