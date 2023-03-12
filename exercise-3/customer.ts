class Customer{

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

let customerInfo = new Customer("John", "Smith");
customerInfo.greeter();


