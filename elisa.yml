x-uffizzi:
  ingress:
    service: app
    port: 8080

services:
  app:
    build: .
    environment:
      NODE_ENV: staging
    deploy:
      resources:
        limits:
          memory: 4000M
    restart: always
    ports:
      - "3000:3000"
    privileged: true
    depends_on:
      - app
    cap_add:
      - SYS_ADMIN
    restart: always
volumes:
  data:
