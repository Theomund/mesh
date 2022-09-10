FROM docker.io/library/golang:1.18.6
WORKDIR /usr/src/app
COPY . .
RUN go mod download && go mod verify
RUN go build -v -o /usr/local/bin/backend ./...
CMD ["backend"]
