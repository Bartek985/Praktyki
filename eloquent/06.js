class Vec {
    constructor(x, y) {
        this.valx = x
        this.valy = y
    }
    plus(newVec) {
        this.valx = this.valx + newVec.valx
        this.valy = this.valy + newVec.valy
        return `Vec{x: ${this.valx}, y: ${this.valy}}`
    }
    minus(newVec) {
        this.valx = this.valx - newVec.valx
        this.valy = this.valy - newVec.valy
        return `Vec{x: ${this.valx}, y: ${this.valy}}`
    }
    get length() {
        return (Math.sqrt(Math.pow(this.valx, 2) + Math.pow(this.valy, 2)))
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5




class Group {
    constructor(arr) {
        this.gr = arr
    }
    add(val) {
        this.gr.push(val)
    }
    delete(val) {
        let counter = 0
        let toDelete = []
        this.gr.forEach(function (elem) {
            if (elem === val) {
                toDelete.push(counter)
            }
            counter++
        })
        toDelete.forEach(function (elem) {
            this.gr = [...group.gr.splice(0, elem), ...this.gr.splice(elem + 1)]
        })
    }
    has(val) {
        this.gr.forEach(function (elem) {
            if (elem === val) {
                return true
            }
        })
        return false
    }
}

let group = new Group([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
  // → false