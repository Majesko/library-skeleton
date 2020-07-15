import ExampleClass from "../src/ExampleClass";

test('Saying hello', () => {
    expect((new ExampleClass()).hello('Username')).toBe('Hello, Username');
});