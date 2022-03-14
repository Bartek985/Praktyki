for (i = 1; i < 8; i++) {
    let text = ""
    for (j = 0; j < i; j++) {
        text += "#"
    }
    console.log(`${text}
  `)
}

//

for (i = 0; i < 100; i++) {
    let text = ""
    if ((i + 1) % 3 == 0) {
        text += "Fizz"
    }
    if ((i + 1) % 5 == 0) {
        text += "Buzz"
    }
    if ((i + 1) % 3 != 0 && (i + 1) % 5 != 0) {
        text = String(i + 1)
    }
    console.log(`${text}
`)
}

//

let size = 8
for (i = 0; i < size; i++) {
    let row = ""
    if (i % 2 == 0) {
        for (j = 0; j < size; j++) {
            if (j % 2 == 0) {
                row += " "
            }
            else {
                row += "#"
            }
        }
    }

    if (i % 2 == 1) {
        for (j = 0; j < size; j++) {
            if (j % 2 == 0) {
                row += "#"
            }
            else {
                row += " "
            }
        }
    }

    console.log(`${row}
`)
}