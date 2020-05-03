import { expect } from 'chai';
import { Customer } from '../customer';




describe("Test the constructor of the customer class and check values", 
() => {
    it('checks firstName, lastName and age property', () => {
        
        let customer = new Customer({
            firstName: "Jimmy",
            lastName: "Green",
            age: 38
        });
        
        expect(customer.firstName).to.equal("Jimmy");
        expect(customer.lastName).to.equal("Green");
        expect(customer.age).to.equal(38);

        console.log(customer.firstName);

    });
});