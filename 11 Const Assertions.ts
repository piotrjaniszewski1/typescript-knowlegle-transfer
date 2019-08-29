// Type '"hello"'
let a = "hello" as const;

// Type 'readonly [10, 20]'
let b = [10, 20] as const;

// Type '{ readonly text: "hello" }'
let c = { text: "hello" } as const;