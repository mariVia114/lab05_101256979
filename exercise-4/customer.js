"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    /**
     * greeter
     */
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.fName, " ").concat(this.lName));
    };
    Customer.prototype.getAge = function () {
        console.log("Age is ".concat(this.age));
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", 25);
customer.greeter();
