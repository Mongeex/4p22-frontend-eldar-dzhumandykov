function makeFibonacciFunction() {
    let a = 0;
    let b = 0;
    function fib() {
        if ((a + b) === 0) {
            b = 1
        } else {
            [a, b] = [b, a + b];
        }
        return a;
    }
    return fib;
}

const fibonacci = makeFibonacciFunction();

console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
