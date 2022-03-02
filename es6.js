function write(number) {
    if (number != 1) {
        console.log('-------')

    }
    console.log(`No.${number}`)
}
function short() {
    console.log('---')
}

write(1)
let x = 'outer';
function test(inner) {
    if (inner) {
        let x = 'inner';
        return x;
    }
    return x; // gets result from line 1 as expected
}

console.log(test(false)); // outer
console.log(test(true)); // inner
short()

{
    let private3 = 1;
}

// console.log(private3) // Uncaught ReferenceError
console.log("Variable not found")

write(2)

const boy = "Charlie"
const girl = "Kate"
console.log(`Boy is named ${boy} and girl is named ${girl}`)

write(3)
console.log(
    `This is text
Text is not using /n
And even then
Text is multi-line string
I can even
Use variable/const inside string
Like this
Boy's name: ${boy}
Girl's name: ${girl}
All thanks to backticks`
)

write(4)
const array = [1, 2, 3, 4, 5]
const [first, , , fourth] = array
console.log(first, fourth)
short()

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
short()

function margin() {
    const left = 1, bottom = 2, right = 3, top = 4
    return { left, bottom, right, top }
}
const { right, left } = margin()
console.log(right, left)
short()

const user = { first: "Jan", last: "Kowalski" }
function names({ first, last }) {
    console.log(`${first} ${last}`)
}
names(user)

short()

function settings() {
    return { display: { color: 'red' }, keyboard: { layout: 'querty' } };
}

const { display: { color: displayColor }, keyboard: { layout: keyboardLayout } } = settings();

console.log(displayColor, keyboardLayout); // red querty

write(5)

class Student {
    constructor(user) {
        this.user = user
    }
    notes() {
        console.log(`${this.user} got C+, B, D, B+ and A today`)
    }
}

const bartek = new Student("Bartek")
bartek.notes()

write(6)

class Lacznosc extends Student {
    notes() {
        super.notes()
        console.log(`${this.user}'s notes are from maths`)
    }
}

const bartek_g = new Lacznosc("Bartek")
bartek_g.notes()


function printAfterTimeout(string, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(string);
        }, timeout);
    });
}

printAfterTimeout('Hello ', 3000).then((result) => {
    write(7)
    console.log(result);
    return printAfterTimeout(result + 'Reader', 1000);

}).then((result) => {
    console.log(result);
});

write(8)

// // this will reference the outer one
// $('.btn').click((event) =>  this.sendData());

// // implicit returns
// const ids = [291, 288, 984];
// const messages = ids.map(value => `ID is ${value}`);

write(9)

const letters = ['a', 'b', 'c', 'd'];
for (const element of letters) {
    console.log(element);
}

write(10)

function point(x = 0, y = -1, isFlag = true) {
    console.log(x, y, isFlag);
}

point(0, 0) // 0 0 true
point(0, 0, false) // 0 0 false
point(1) // 1 -1 true
point() // 0 -1 true

write(11)

function printf(format, ...params) {
    console.log('params: ', params);
    console.log('format: ', format);
}

printf('%s %d %.2f', 'adrian', 321, Math.PI);

write(12)
console.log(Math.max(...[2, 100, 1, 6, 43])) // 100
short()

const array1 = [2, 100, 1, 6, 43];
const array2 = ['a', 'b', 'c', 'd'];
const array3 = [false, true, null, undefined];

console.log([...array1, ...array2, ...array3]);

//Around 25% less code with es6 :)