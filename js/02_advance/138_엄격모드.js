let x = 10;

function test() {
    x = 30;
}

test();

console.log(x); //  30

'use strict';

function test1() {
    y = 10;
}

test1();
console.log(y)