const foo = {
    a: 'a',
    b: 'b',
    c: 'c'
}

const bar = {
    d: 'd',
    e: 'e',
    f: 'f'
}

const baz = {
    g: 'g',
    h: 'h',
    i: 'i'
}



// Shallow copy
const copy = { ...foo };
// console.log(copy);




const merged = { ...foo, ...bar, ...baz };
// console.log(merged);




const obj = { x: 1, y: "string" };
const newObj = {...obj, z: 3, y: 4};
// console.log(newObj)




// Rest
const names = {cat: 'Bob', dog: 'Fred', alligator: 'Benedict'};
const { cat, ...otherAnimals } = names;

console.log(cat);
console.log(otherAnimals);