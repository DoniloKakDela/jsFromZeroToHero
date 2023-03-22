const add = (a, b) => (b === undefined ? n => a + n : a + b);
const sub = (a, b) => (b === undefined ? n => a - n : a - b);
const mul = (a, b) => (b === undefined ? n => a * n : a * b);
const div = (a, b) => (b === undefined ? n => n / a : b / a);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const a = add(1, 2); // 3
const b = mul(a, 10); // 30
const sub1 = sub(1); // sub1 takes from any number one
const c = sub1(b); // 29
const d = mul((sub(a, 1)), (c)); // 58
const doSmth = pipe(add(d), sub(c), mul(b), div(a)); // the function that sequentially performs these operations.
const result = doSmth(0); // (((0 + 58) - 29) * 30) / 3 = 290
const x = pipe(add(1), mul(2))(3); // 8

console.log(result, x);