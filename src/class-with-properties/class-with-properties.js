class Customer {

    static MinAgeForEntry = 20;
    
    constructor({firstName, lastName, birthDate, country}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.country = country;
    }
}

export {Customer};
