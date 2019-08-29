// Declare a tuple type
let tup: [string, number];

// Initialize it
tup = ["hello", 10]; // OK

// Initialize it incorrectly
tup = [10, "hello"]; // Error
tup = ["hello"]; // Error



// Optional parameters
let tupOptional: [string, number?];

tupOptional = ["hello", 10]; // OK
tupOptional = ["hello"]; // OK



// Readonly tuples
function foo(pair: readonly [string, string]) {
    console.log(pair[0]);   // okay
    pair[1] = "hello!";     // error
}