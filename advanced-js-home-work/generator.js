/* Написать функцию-генератор, выдающую треугольные числа. */

function* genTriNum() {
    let level = 1;
    let tri_num = 0;
    while (1) {
        tri_num += level;
        yield tri_num;
        level++;
    }
}

let nextTriNum = genTriNum();
console.log(nextTriNum.next().value);
console.log(nextTriNum.next().value);
console.log(nextTriNum.next().value);
console.log(nextTriNum.next().value);
console.log(nextTriNum.next().value);

