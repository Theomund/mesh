package main

import (
	"fmt"
	"time"
)

func forever() {
	for {
		fmt.Println(time.Now().UTC())
		time.Sleep(time.Second)
	}
}

func main() {
	go forever()
	select {}
}
