FROM debian:buster

RUN apt-get update \
 && apt-get install -y figlet \
 && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["/usr/bin/figlet"]
