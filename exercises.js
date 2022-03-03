//.map
console.log(`array.map`)
let array = [4, 9, 16, 25]

let newArray = array.map(Math.sqrt)
console.log(newArray)

newArray = array.map(Math.pow)
console.log(newArray)

function multiply(num) {
    return num * 10
}

newArray = array.map(multiply)
console.log(newArray)

//filter
array = [2, 3, 2022, 15, 27]
newArray = array.filter(check)
console.log(newArray)

function check(num) {
    return num % 2 == 0
}

newArray = array.filter(checkTwo)
console.log(newArray)

function checkTwo(num) {
    return num > 16
}

//reduce

array = [64, 32, 16, 8, 4]
console.log(array.reduce(substract))

function substract(total, num) {
    return total - num
}

array = [15, 13, 16, 12, 16, 17, 15, 19, 12, 11, 17]
console.log(array.reduce(maxVal))

function maxVal(total, num) {
    if (num > total) {
        return num
    }
    else {
        return total
    }
}
