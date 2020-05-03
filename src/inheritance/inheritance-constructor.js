class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class Customer extends Person{
    
    constructor(firstName, lastName, age, isPrimeMember){
        
        super(firstName, lastName, age);
        
        this.isPrimeMember = isPrimeMember;
    }
}

export { Person, Customer}