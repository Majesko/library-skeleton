var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.greet = function (userName) {
        return "Hello, " + userName;
    };
    return Hello;
}());

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
//# sourceMappingURL=index.es.js.map
