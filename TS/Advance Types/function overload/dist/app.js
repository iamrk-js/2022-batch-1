"use strict";
let cl = console.log;
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
let result = add(3, 3);
let result2 = add("Ravikiran ", "Niturkar"); // "Ravikiran Niturkar"
cl(result2.split(" "));
let result3 = add("3", 3);
cl(result3);
