## Getting Started with Your First Functional Go Program in Visual Studio Code

This document provides a comprehensive, step-by-step guide to writing your first functional program in the Go programming language using Visual Studio Code as your editor. We will begin from a completely blank slate, set up the necessary environment, write the code, and then compile and run it.

### 1. Environment Setup in Visual Studio Code

Before writing any Go code, you need to prepare your development environment. This involves setting up a dedicated folder for your project.

**Steps:**

1. **Open Visual Studio Code:** Launch the editor. If a welcome screen appears, you can close it.
    
2. **Toggle the Explorer:** On the upper-left side of the window, click the icon resembling two overlapping pieces of paper to open the Explorer view.
    
3. **Open a Project Folder:**
    
    - Click the "Open Folder" button.
        
    - Navigate to a directory where you wish to store your projects.
        
    - Create a new folder. For this guide, we'll name it `learning-go`.
        
    - Select and open this new folder.
        
4. **Trust the Authors:** Visual Studio Code may prompt you with a security warning about the folder's authors. Since you created the folder, it is safe to check the box to trust the authors and prevent this message from reappearing for this workspace.
    

### 2. Creating Your First Go File

With the project folder open, the next step is to create a file to hold your Go code.

**Steps:**

1. **New File:** In the Explorer view, click the "New File" icon next to your folder's name.
    
2. **Name the File:** Name the file `main.go`.
    

It is a strong convention in the Go community to name the main entry point of an application `main.go`. While you could name it anything with a `.go` extension (e.g., `fish.go`), adhering to conventions makes your code more understandable and is considered "idiomatic Go."

### 3. The Fundamental Structure of a Go Program

Every Go file has a specific structure that must be followed for the program to be valid.

#### a. Package Declaration

The very first line of any Go file must be a `package` declaration. A package is a way of organizing and reusing code. For a standalone executable program, the main package must be called `main`.

```go
package main
```

#### b. The `main` Function

Every executable Go program must contain a function named `main`. This function serves as the entry point for the application—it's the first code that runs when you execute the program.

A function is defined with the `func` keyword, followed by the function name, parentheses `()`, and a set of curly braces `{}`.

```go
func main() {
    // Code inside the main function will execute here.
}
```

- **No Arguments:** The empty parentheses `()` signify that our `main` function does not accept any input parameters.
    
- **No Return Value:** The absence of a type declaration after the parentheses indicates that the `main` function does not return any value.
    

Technically, a file containing `package main` and an empty `func main() {}` is a complete, runnable Go program, although it doesn't perform any actions.

### 4. Importing Packages: The `fmt` Package

To make our program perform a useful action, like printing text to the screen, we need to use code from Go's standard library. The standard library is a collection of pre-built packages that provide a wealth of functionality.

For printing output, we use the `fmt` package, which stands for "format."

When you begin typing code that requires an external package, such as `fmt`, a modern editor like VS Code will often automatically add the required import statement for you.

```
import "fmt"
```

This line tells the Go compiler that our program will be using functions from the `fmt` package. The full code now looks like this:

```go
package main

import "fmt"

func main() {
    // ...
}
```

### 5. Printing Output with `fmt.Println`

The `fmt` package contains various functions for handling input and output. The `Println` function (short for "Print Line") is used to print a line of text to the console.

Let's add a line to our `main` function to print the classic "Hello, world." message.

```go
func main() {
	fmt.Println("Hello, world.")
}
```

### 6. Running Your Go Program

With the code in place, you can now run your program using the integrated terminal in Visual Studio Code.

**Steps:**

1. **Open a New Terminal:** From the top menu, select `Terminal` -> `New Terminal`. A terminal panel will open at the bottom of the screen, automatically navigated to your project directory.
    
2. **Execute the Program:** In the terminal, type the following command and press Enter:
    
    ```go
    go run main.go
    ```
    
    - `go run`: This command compiles and runs the specified Go source file.
        

You will see the following output in the terminal:

```go
Hello, world.
```

### 7. Working with Variables and Types

Variables are named containers for storing data. Go is a **statically-typed** language, which means you must declare the type of data a variable will hold, and that type cannot change.

#### a. Declaring Variables with `var`

The `var` keyword is used to declare a variable. You must specify the variable name and its type.

Let's declare a string variable called `whatToSay` and an integer variable called `i`.

```go
var whatToSay string
var i int
```

- `string`: This type is used for a sequence of characters, like text.
    
- `int`: This type is for whole numbers (integers). Go also offers specific integer types like `int8`, `int16`, `int32`, and `int64`. The generic `int` type defaults to the most efficient size for your computer's architecture (usually 64-bit).
    

#### b. The "Declared but not Used" Rule

The Go compiler is very strict and aims to promote clean code. If you declare a variable inside a function and do not use it, the compiler will raise an error, and your program will not run. This prevents clutter and potential bugs from unused variables.

#### c. Assigning and Using Variables

To use a variable, you can assign a value to it using the `=` operator and then refer to it by its name.

Let's assign values to our variables and print them out.

```go
whatToSay = "Goodbye, cruel world"
fmt.Println(whatToSay)

i = 7
fmt.Println("i is set to", i)
```

Notice that `fmt.Println` can accept multiple arguments. When given a string followed by a variable, it will print them separated by a space.

### 8. Defining and Using Your Own Functions

Besides the required `main` function, you can define your own custom functions to organize your code into logical, reusable blocks.

#### a. Defining a Function with a Return Value

Let's create a function named `saySomething` that returns a `string`. The return type is specified after the parentheses.

```go
func saySomething() string {
    return "something"
}
```

The `return` keyword specifies the value that the function will send back to the code that called it.

#### b. Go's Multi-Return Value Feature

A powerful and distinctive feature of Go is its ability for a function to return more than one value. This is often used to return a result along with an error status.

To return multiple values, you list the types in parentheses.

Let's modify `saySomething` to return two strings.

```go
func saySomething() (string, string) {
	return "something", "else"
}
```

#### c. Calling a Function and a Shorthand for Variable Declaration

Now, let's call our `saySomething` function from `main` and capture its returned values.

Go provides a shorthand declaration-and-assignment operator, `:=`. This operator infers the type of the variable from the value on the right-hand side, so you don't need to use the `var` keyword.

```go
whatWasSaid, theOtherThingThatWasSaid := saySomething()
```

This single line of code does three things:

1. Calls the `saySomething` function.
    
2. Declares two new variables: `whatWasSaid` and `theOtherThingThatWasSaid`.
    
3. Assigns the two return values from `saySomething` to these variables, respectively.
    

We can then print these values:

```go
fmt.Println("The function returned", whatWasSaid, theOtherThingThatWasSaid)
```

### Final Code

After putting all the pieces together, your `main.go` file should look like this:

```go
package main

import "fmt"

func main() {
	// Simple print statement
	fmt.Println("Hello, world.")

	// Declaring and assigning variables
	var whatToSay string
	var i int

	whatToSay = "Goodbye, cruel world"
	fmt.Println(whatToSay)

	i = 7
	fmt.Println("i is set to", i)

	// Using shorthand declaration and calling a function with multiple returns
	whatWasSaid, theOtherThingThatWasSaid := saySomething()

	fmt.Println("The function returned", whatWasSaid, theOtherThingThatWasSaid)
}

// A function that returns two string values
func saySomething() (string, string) {
	return "something", "else"
}
```

Running this final program with `go run main.go` will produce the following output:

```go
Hello, world.
Goodbye, cruel world
i is set to 7
The function returned something else
```