

const HELLO_WORLD = "hello world";
let str = 'hello world';

console.log(HELLO_WORLD);
console.log(str); 

let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

for (let s of 'hello world') {
    console.log(s);
}

let templateStr = `<h1>${str}</h1>`;
console.log(templateStr);

function hello() {
    console.log('hello world');
}
hello();

function world(x, y) {
    console.log(x, y);
}
world(1, 2);

function world2(x = 10, y = 9) {
    console.log(x, y);
}
world2();
