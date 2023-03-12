var CustomerTwo = /** @class */ (function () {
    function CustomerTwo(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    /**
     * greeter
     */
    CustomerTwo.prototype.greeter = function () {
        console.log("Hello ".concat(this.fName, " ").concat(this.lName));
    };
    return CustomerTwo;
}());
var customerTwo = new CustomerTwo("John", "Smith");
customerTwo.greeter();
