// keyof unknown
type T11 = keyof any;  // string | number | symbol
type T12 = keyof unknown;  // never

function f(x: unknown) {
    x == 5;
    x !== 10;

    x >= 0;  // Error
    x as number + 1;  // Error
    x * 2;  // Error

    x.foo;  // Error
    x[5];  // Error
    x();  // Error
    new x();  // Error
}