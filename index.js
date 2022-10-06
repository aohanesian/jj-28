`use strict`;

function foo() {
    console.log(`in foo`);
    let x = 0;
    return function bar(y) {
        console.log(`enter bar`);
        let result = x + y;
        console.log(`remember x`)
        x += y;
        console.log(`before bar return`);
        return result;
    };
};

let sum = foo(0);

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

