interface AnimationOptions {
    deltaX: number;
    deltaY: number;
    easing: "ease-in" | "ease-out" | "ease-in-out";
}

let options: AnimationOptions = {
    deltaX: 45,
    deltaY: 50,
    easing: "ease-in"
}

options.easing = 'ease-in-out';