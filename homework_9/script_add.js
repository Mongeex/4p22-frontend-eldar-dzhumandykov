const fibonacci = ((a = 0, b = 0) => () => {
    if ((a + b) === 0) {
        b = 1 
    } else {
        [a, b] = [b, a + b];
    }
    return a
})()

console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());