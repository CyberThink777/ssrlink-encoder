use std::env;
use std::process;

fn main() {
    let args: Vec<String> = env::args().collect(); 
    if args.len() < 2 {
        println!("Usage: {} [FILENAME] <GroupName>", args[0]);
        process::exit(1);
    }
    println!("{:?}", args)
}