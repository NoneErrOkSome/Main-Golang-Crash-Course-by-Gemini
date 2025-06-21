package main

import (
	"fmt"
	"net/http"
)
const portNumber = ":8080"


func Home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "This is the home page")
}

func About(w http.ResponseWriter, r *http.Request) {
	x := 100;
	y := 100
	sum := addvalue(x, y)
	fmt.Fprintf(w, "This is the about page and sum of %d + %d = %d", x, y, sum)
}

func addvalue(x, y int) int {
	return x + y
}

func main() {

	http.HandleFunc("/", Home)
	http.HandleFunc("/about", About)


	
	fmt.Printf("Starting application on port %s\n", portNumber)
	_ = http.ListenAndServe(portNumber, nil)

}