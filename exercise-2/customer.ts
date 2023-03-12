class Customer{
    fName: string;
    lName: string;

    /**
     * greeter
     */
    public greeter() {
        console.log(`Hello ${this.fName} ${this.lName}`);
    }

}

let customer = new Customer();
customer.fName = "John";
customer.lName = "Smith";
customer.greeter();


