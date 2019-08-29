abstract class Animal {
    name: string;
    abstract move(): void;
}

class Fish extends Animal {
    move(): void {
        console.log('I am moving');
    }

}

class Dog implements Animal {
    name: string;
    move(): void {
        console.log('I am moving');
    }
}