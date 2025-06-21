package main

import (
	"errors"
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
	_, _ = fmt.Fprintf(w, "This is the about page and sum of %d + %d = %d", x, y, sum)
}

func Divide(w http.ResponseWriter, r *http.Request) {
	x := 100.0
	y := 10.0
	f, err := divideValues(float32(x), float32(y))
	if err != nil {
		_, _ = fmt.Fprintf(w, "Cannot divide by 0")
		return
	}

	_, _ = fmt.Fprintf(w, "%f divided by %f is %f", x, y, f)
}

func divideValues(x, y float32) (float32, error) {
	if y == 0 {
		err := errors.New("cannot divide by zero")
		return 0, err
	}
	return x / y, nil
}

func addvalue(x, y int) int {
	return x + y
}

func main() {

	http.HandleFunc("/", Home)
	http.HandleFunc("/about", About)
	http.HandleFunc("/divide", Divide)



	
	fmt.Printf("Starting application on port %s\n", portNumber)
	_ = http.ListenAndServe(portNumber, nil)

}