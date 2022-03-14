console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

console.log("Aardvark" < "Zoroaster")
// → true
console.log("aardvark" < "Zoroaster")
// → false
//kolejność kodu unicode: "A"-"Z" potem "a"-"z" potem znaki specjalne

console.log(NaN == NaN)
// → false
//jedyny przypadek kiedy dwie identyczne wartości nie są równe sobie to NaN == NaN (not a number, nie ma sensu)

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
//ternary operating (unary-binary-ternary): jeśli pierwsza wartość to true zwraca drugą, jeśli false zwraca trzecią

console.log(null == undefined)
//true, js rozróżnia tylko czy wartość równa jest null lub undefined

console.log(8 * null)
// → 0, null jest konwertowany na 0
console.log("5" - 1)
// → 4, "5" jest konwertowane na 5
console.log("5" + 1)
// → 51, tutaj "5" nie jest konwertowane tylko 1 jest
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true, 0 to liczbowa reprezentacja false

console.log(null == 0)
// → false

console.log("" == false)
// → true
console.log("" === false)
// → false
//=== (!==) oznacza precyzyjne sprawdzanie wartości (bez konwersji)

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
//takie użycie || zwraca wartość po prawej tylko jeśli ta po lewej zwraca false


console.log(null && "user")
// → 0
console.log("Agnes" && "user")
// → "user"
//takie użycie && natomiast zwraca wartość po prawej tylko jeśli ta po lewej zwraca true
//null, undefined,NaN, 0, "" i oczywiście false wszystkie zwracają false. Wszystko inne jest konwertowane na true