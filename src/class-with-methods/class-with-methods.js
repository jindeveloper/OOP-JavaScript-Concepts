class Customer {

    constructor({firstName, lastName, birthDate, country}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.country = country;
    }

    static isLeapYear(){

        let year = new Date().getFullYear();
        
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    getFullName(){
        return `Mr./Ms. ${this.lastName}, ${this.firstName}`
    }

    getCustomerCompleteInfo(){
        return `Mr./Ms. ${this.lastName}, ${this.firstName}` 
               + ` was born in ${this.country} on ${this.birthDate}` 
               + ` and currently ${new Date().getFullYear() - new Date(this.birthDate).getFullYear()} years of age.`
    }
}

export {Customer};
