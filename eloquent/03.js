function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2


function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10


function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8

//


function min(arg1, arg2) {
  if (arg1 >= arg2) {
    return arg2
  }
  else {
    return arg1
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


function isEven(num) {
  if (num % 2 == 0) {
    return true
  }
  else {
    return false
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??



function countBs(str) {
  let counter = 0

  Array.from(str).forEach(function (elem) {
    if (elem === "B") {
      counter++
    }

  })
  return counter
}

function countChar(str, ch) {
  let counter = 0

  Array.from(str).forEach(function (elem) {
    if (elem === ch) {
      counter++
    }

  })
  return counter
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4