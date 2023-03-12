export class Customer{

    private fName: string;
    private lName: string;
    private age: number;


    constructor(fName:string, lName:string, age:number){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    /**
     * greeter
     */
    public greeter() {
        console.log(`Hello ${this.fName} ${this.lName}`);
    }

    getAge() {
        console.log(`Age is ${this.age}`)
    }

}

let customer = new Customer("John", "Smith", 25);
customer.greeter();


