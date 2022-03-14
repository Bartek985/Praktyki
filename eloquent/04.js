function range(start, end, step = 0) {
    if (start < end && step < 0 || start > end && step > 0)
        return "That would be infinite loop ;)"
    let counter = start
    let arr = []
    if (step == 0) {
        for (i = 0; i < (end - start + 1); i++) {
            arr.push(counter)
            counter++
        }

    }
    else {
        do {
            arr.push(counter)
            counter += step
        } while (counter < end && step > 0 || counter > end && step < 0)

    }
    return arr
}

function sum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sum(range(1, 10, -4)));


