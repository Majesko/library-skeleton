import Hello from "./Hello";

export default class ExampleClass {
    private greet: Hello;

    constructor() {
        this.greet = new Hello();
    }


    hello(userName: string) {
        return this.greet.greet(userName);
    }
}