export class Customer{

    private fName: string;
    private lName: string;

    constructor(fName:string, lName:string){
        this.fName = fName;
        this.lName = lName;
    }

    /**
     * greeter
     */
    public greeter() {
        console.log(`Hello ${this.fName} ${this.lName}`);
    }

}

let customer = new Customer("John", "Smith");
customer.greeter();


