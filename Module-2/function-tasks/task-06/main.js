function calc(a, b, c) {
    switch (c) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            break;
    }
}
console.log(calc(4, 6, '+'));