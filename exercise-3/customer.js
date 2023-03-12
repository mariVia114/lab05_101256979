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
var customerInfo = new Customer("John", "Smith");
customerInfo.greeter();
