foo(1, 2);

function foo(a, b, c) {
    console.log('Arguments given:', arguments.length);
    console.log('Arguments needed:', arguments.callee.length);
}
