class CustomerTwo{

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

let customerTwo = new CustomerTwo("John", "Smith");
customerTwo.greeter();


