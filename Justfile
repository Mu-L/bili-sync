clean:
    rm -rf ./*-bili-sync-rs

build-frontend:
    cd ./web && bun run build && cd ..

build: build-frontend
    cargo build --target x86_64-unknown-linux-musl --release

build-docker: build
    tar czvf ./bili-sync-rs-Linux-x86_64-musl.tar.gz ./target/x86_64-unknown-linux-musl/release/bili-sync-rs
    docker build . -t bili-sync-rs-local --build-arg="TARGETPLATFORM=linux/amd64"
    just clean

run: build-frontend
    cargo run
