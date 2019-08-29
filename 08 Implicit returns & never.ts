function f(x) { // Error: Not all code paths return a value.
    if (x) {
        return false;
    }

    // implicitly returns `undefined`
}

// Never

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}