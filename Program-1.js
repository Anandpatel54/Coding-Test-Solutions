class Calculator {
  calculate(a, b, operation) {
    if (operation === "add" || operation === "+") {
      console.log("Result:", a + b);
    } else if (operation === "subtract" || operation === "-") {
      console.log("Result:", a - b);
    } else if (operation === "multiply" || operation === "*") {
      console.log("Result:", a * b);
    } else if (operation === "divide" || operation === "/") {
      if (b !== 0) {
        console.log("Result:", a / b);
      } else {
        console.log("Error: Division by zero");
      }
    } else {
      console.log("Invalid operation");
    }
  }
}

let calc = new Calculator();
calc.calculate(10, 5, "add"); 
calc.calculate(10, 5, "-"); 
calc.calculate(10, 0, "divide"); 
calc.calculate(10, 5, "multiply");