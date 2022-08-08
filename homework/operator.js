// js home works
const addition = function (numbe1, numbe2) {
    let sum;
    sum = numbe1 + numbe2;
    return sum;
}
console.log(addition(3, 7));
const products = function (numbe1, numbe2) {
    let product;
    product = numbe1 * numbe2;
    return product;
}
console.log(products(8, 7));
const quotients = function (numbe1, numbe2) {
    let quotient;
    quotient = numbe1 / numbe2;
    return quotient;
}
console.log(quotients(15, 3));
const remainders = function (numbe1, numbe2) {
    let remainder;

    remainder = numbe1 % numbe2;
    return remainder;
}
console.log(remainders(3, 2));

const isEvenOdd = function (numbe1) {
    if ((numbe1 % 2) === 0) {
        console.log(numbe1 + " " + "is aneven");
    } else {
        console.log(numbe1 + " " + "is an odd");
    }
}
isEvenOdd(8);
const divisor = function (numbe1, numbe2) {

    if ((numbe1 % numbe2) === 0) {
        return true;

    }
    else {
        return false;
    }
}
console.log(divisor(6, 2));
