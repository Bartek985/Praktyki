var x = 'outer';
function test(inner) {
    if (inner) {
        var x = 'inner'; // scope whole function
        return x;
    }
    return x; // gets redefined because line 4 declaration is hoisted
}
console.log("No.1")
console.log(test(false)); // undefined 😱
console.log(
    `${test(true)}
---`
); // inner

{
    var private = 1;
}


console.log(`${private}
-------
No.2`); //leaks out

var first = 'Adrian';
var last = 'Mejia';
console.log('Your name is ' + first + ' ' + last + '.');
console.log(`-------
No.3`)

var template = '<li *ngFor="let todo of todos" [ngClass]="{completed: todo.isDone}" >\n' +
    '  <div class="view">\n' +
    '    <input class="toggle" type="checkbox" [checked]="todo.isDone">\n' +
    '    <label></label>\n' +
    '    <button class="destroy"></button>\n' +
    '  </div>\n' +
    '  <input class="edit" value="">\n' +
    '</li>';
console.log(`${template}
-------
No.4`);

var array = [1, 2, 3, 4];

var first = array[0];
var third = array[2];

console.log(first, third); // 1 3
console.log('---')

var a = 1;
var b = 2;

var tmp = a;
a = b;
b = tmp;

console.log(a, b); // 2 1
console.log('---')

function margin() {
    var left = 1, right = 2, top = 3, bottom = 4;
    return { left: left, right: right, top: top, bottom: bottom };
}

var data = margin();
var left = data.left;
var bottom = data.bottom;

console.log(left, bottom); // 1 4
console.log('---')

var user = { firstName: 'Adrian', lastName: 'Mejia' };

function getFullName(user) {
    var firstName = user.firstName;
    var lastName = user.lastName;

    return firstName + ' ' + lastName;
}

console.log(getFullName(user)); // Adrian Mejia

console.log('---')

function settings() {
    return { display: { color: 'red' }, keyboard: { layout: 'querty' } };
}

var tmp = settings();
var displayColor = tmp.display.color;
var keyboardLayout = tmp.keyboard.layout;

console.log(displayColor, keyboardLayout); // red querty

console.log('-------')

console.log("No.5")

var Animal = (function () {
    function MyConstructor(name) {
        this.name = name;
    }
    MyConstructor.prototype.speak = function speak() {
        console.log(this.name + ' makes a noise.');
    };
    return MyConstructor;
})();

var animal = new Animal('animal');
animal.speak(); // animal makes a noise.

console.log('-------')

console.log('No.6')
var Lion = (function () {
    function MyConstructor(name) {
        Animal.call(this, name);
    }

    // prototypal inheritance
    MyConstructor.prototype = Object.create(Animal.prototype);
    MyConstructor.prototype.constructor = Animal;

    MyConstructor.prototype.speak = function speak() {
        Animal.prototype.speak.call(this);
        console.log(this.name + ' roars 🦁');
    };
    return MyConstructor;
})();

var lion = new Lion('Simba');
lion.speak(); // Simba makes a noise.
// Simba roars.
console.log('-------')


function printAfterTimeout(string, timeout, done) {
    setTimeout(function () {
        done(string);
    }, timeout);
}

printAfterTimeout('Hello ', 3000, function (result) {
    console.log("No.7")
    console.log(result);

    // nested callback
    printAfterTimeout(result + 'Reader', 1000, function (result) {
        console.log(result);
        console.log('-------')
    });
});


console.log("No.8")
var _this = this; // need to hold a reference

/*
$('.btn').click(function (event) {
    _this.sendData(); // reference outer this
});

$('.input').on('change', function (event) {
    this.sendData(); // reference outer this
}.bind(this)); // bind to outer this
*/

console.log('-------')

console.log('No.9')
// for
var array = ['a', 'b', 'c', 'd'];
for (var i = 0; i < array.length; i++) {
    var element = array[i];
    console.log(element);
}

// forEach
array.forEach(function (element) {
    console.log(element);
});
console.log('-------')

console.log('No.10')
function point(x, y, isFlag) {
    x = x || 0;
    y = y || -1;
    isFlag = isFlag || true;
    console.log(x, y, isFlag);
}

point(0, 0) // 0 -1 true 😱
point(0, 0, false) // 0 -1 true 😱😱
point(1) // 1 -1 true
point() // 0 -1 true
console.log('-------')


console.log('No.11')
function printf(format) {
    var params = [].slice.call(arguments, 1);
    console.log('params: ', params);
    console.log('format: ', format);
}

printf('%s %d %.2f', 'adrian', 321, Math.PI);
console.log('-------')

console.log('No.12')
console.log(Math.max.apply(Math, [2, 100, 1, 6, 43])) // 100
console.log('---')
var array1 = [2, 100, 1, 6, 43];
var array2 = ['a', 'b', 'c', 'd'];
var array3 = [false, true, null, undefined];

console.log(array1.concat(array2, array3));
console.log('-------')