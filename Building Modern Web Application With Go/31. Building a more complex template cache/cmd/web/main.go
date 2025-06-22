package main

import (
	"fmt"
	"myApp/pkg/handlers"
	"net/http"
)
const portNumber = ":8080"


/*
	go run ./cmd/web
*/

func main() {

	http.HandleFunc("/", handlers.Home)
	http.HandleFunc("/about", handlers.About)

	fmt.Printf("Starting application on port %s\n", portNumber)
	_ = http.ListenAndServe(portNumber, nil)

}


