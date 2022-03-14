function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log([...arrays[0], ...arrays[1], ...arrays[2]])
