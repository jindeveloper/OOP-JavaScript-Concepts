class Customer {

    constructor({ firstName = 'John', lastName = 'Doe', age = 18 }) {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // get firstName(){
    //     return this._firstName;
    // }

    // set firstName(value){
    //     this._firstName  = value;
    // }
}

export { Customer };
