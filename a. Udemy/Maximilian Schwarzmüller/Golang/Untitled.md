Of course. Here is an in-depth study guide based on the concepts covered in the text.

---

## Go Study Guide: Formatting and Outputting Text

This guide covers essential techniques for displaying and formatting text in Go using the `fmt` package, as well as handling multi-line strings.

### 1. Basic Output with `fmt.Println`

The `fmt.Println` function is the simplest way to print output to the console.

- **Core Function**: It prints one or more values to the console.
    
- **Key Behaviors**:
    
    - It automatically adds a **space** between multiple arguments.
        
    - It automatically appends a **newline character** (`\n`) at the end of the output.
        

**Example:**

Go

```
import "fmt"

func main() {
    futureValue := 12500.55
    
    // Pass a string literal and a variable
    fmt.Println("Future Value:", futureValue) 
}
```

**Output:**

```
Future Value: 12500.55
```

---

### 2. Formatted Output with `fmt.Printf`

When you need more control over the output's appearance, `fmt.Printf` is the right tool. The 'f' stands for "formatted."

- **Core Function**: It prints a string created from a template (the "format string") and a list of variables.
    
- **Key Behaviors**:
    
    - It does **not** automatically add spaces or newlines. You must add them manually using `\n`.
        
    - It uses **format specifiers** (also called "verbs") as placeholders for variables. The variables are passed as arguments after the format string in the order they should appear.
        

**Common Format Specifiers:**

- **`%v`**: The default format for the value. Good for general-purpose printing.
    
- **`%f`**: Formats a floating-point number (a decimal).
    
- **`%T`**: Outputs the data **T**ype of the variable.
    
- **`%%`**: To print a literal percent sign.
    

Controlling Decimal Places:

You can control the precision of floating-point numbers by adding . followed by a number between the % and f.

- **`%.2f`**: Prints the float with **2** decimal places.
    
- **`%.0f`**: Prints the float with **0** decimal places (effectively rounding it to the nearest whole number).
    

**Example:**

Go

```
import "fmt"

func main() {
    futureValue := 12500.55678
    inflationAdjustedValue := 11000.4321
    
    fmt.Printf("Future Value: %.2f\nInflation Adjusted Value: %.0f", futureValue, inflationAdjustedValue)
}
```

**Output:**

```
Future Value: 12500.56
Inflation Adjusted Value: 11000
```

---

### 3. Storing Formatted Strings with `fmt.Sprintf`

Sometimes you need to create a formatted string and store it in a variable for later use, rather than printing it immediately. `fmt.Sprintf` (String Print Formatted) is designed for this.

- **Core Function**: It works exactly like `Printf`, but instead of printing to the console, it **returns the formatted string**.
    

**When to use `Sprintf`**:

- When you need to build a string to write to a file.
    
- When you need to create a log message.
    
- When you want to pass a fully formatted string to another function.
    

**Example:**

Go

```
import "fmt"

func main() {
    futureValue := 12500.55678
    
    // Create the formatted string and store it
    formattedOutput := fmt.Sprintf("The calculated future value is: %.2f", futureValue)
    
    // Now you can use the 'formattedOutput' variable
    fmt.Println(formattedOutput)
}
```

**Output:**

```
The calculated future value is: 12500.56
```

---

### 4. Multi-line Strings with Backticks

Go provides two ways to create strings, each with different rules for line breaks.

1. **Double Quotes (`"`)**:
    
    - This is the standard way to create a string.
        
    - You **cannot** split a double-quoted string across multiple lines in your code.
        
    - Special characters like `\n` are interpreted as instructions (e.g., to create a newline).
        
2. **Backticks (`` ` ``)**:
    
    - This creates a "raw string literal."
        
    - You **can** split the string across multiple lines directly in your editor.
        
    - Special characters like `\n` are treated as literal text, not as instructions.
        

**Example:**

Go

```
import "fmt"

func main() {
    // This will cause an error because you can't split a double-quoted string
    // text1 := "This is a
    // long string."

    // This is the correct way to create a multi-line string
    multiLineText := `This is a
long string.
The \n character is just text here.`

    fmt.Println(multiLineText)
}
```

**Output:**

```
This is a
long string.
The \n character is just text here.
```

---

### **Quick Reference: Print Function Comparison**

|Function|Output Destination|Formatting|Auto Spacing|Auto Newline|
|---|---|---|---|---|
|`Println`|Console|No|Yes|Yes|
|`Print`|Console|No|Yes|No|
|`Printf`|Console|Yes|No|No|
|`Sprintf`|String Variable|Yes|No|No|