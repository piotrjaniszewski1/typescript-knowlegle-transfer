interface Person {
    name: string;
    age: number;
    location: string;
}

/* Desired result
interface PartialPerson {
    name?: string;
    age?: number;
    location?: string;
}

*/

type PartialType<T> = {
    [P in keyof T]?: T[P];
};

type PartialPerson = PartialType<Person>;

const person: Person = {
    name: 'name'
}

const partialPerson: PartialPerson = {
    name: 'name'
}



// Keep types the same, but make each property to be read-only.
type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P];
};

// Same property names, but make the value a promise instead of a concrete one
type Deferred<T> = {
    [P in keyof T]: Promise<T[P]>;
};

// Wrap proxies around properties of T
type Proxify<T> = {
    [P in keyof T]: { get(): T[P]; set(v: T[P]): void }
};