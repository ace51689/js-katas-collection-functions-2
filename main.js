// Sum
function add(x, y) {
    return x + y
}

console.log(add(6, 7))

// Multiply
function multiply(x, y) {
    let result = 0
    for (let start = 0; start < y; start += 1) {
        result = add(result, x)
    }
    return result
}

console.log(multiply(2, 20))


//Power/Exponentiation
function power(x, n) {
    let result = 1
    for (let start = 0; start < n; start += 1) {
        result = multiply(result, x)
    }
    return result
}

console.log(power(4, 4))

//Factorial
function factorial(x) {
    let result = 1
    for (x; x > 0; x -= 1) {
        result = multiply(result, x)
        add(x, -1)
    }
    return result
}

console.log(factorial(5))