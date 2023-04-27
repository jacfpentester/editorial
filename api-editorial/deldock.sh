#!/bin/bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
rm -R postgres
docker-compose -f postgres.yml up -d
exit
