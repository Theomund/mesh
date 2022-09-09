FROM golang:1.18.6 AS backend
WORKDIR /usr/src/app
COPY go.mod .
RUN go mod download && go mod verify
COPY . .
RUN go build -v -o /usr/local/bin/mesh ./...
CMD ["mesh"]
