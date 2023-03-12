"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    /**
     * greeter
     */
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.fName, " ").concat(this.lName));
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith");
customer.greeter();
