var Customer = /** @class */ (function () {
    function Customer() {
    }
    /**
     * greeter
     */
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.fName, " ").concat(this.lName));
    };
    return Customer;
}());
var customer = new Customer();
customer.fName = "John";
customer.lName = "Smith";
customer.greeter();
