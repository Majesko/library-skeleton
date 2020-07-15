import Hello from "./Hello";
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
        this.greet = new Hello();
    }
    ExampleClass.prototype.hello = function (userName) {
        return this.greet.greet(userName);
    };
    return ExampleClass;
}());
export default ExampleClass;
//# sourceMappingURL=ExampleClass.js.map