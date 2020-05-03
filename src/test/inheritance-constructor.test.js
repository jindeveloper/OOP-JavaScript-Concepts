import { Person, Customer } from '../inheritance/inheritance-constructor';
import { expect } from 'chai';

describe("Test parent constructor",
    () => {
        let customer = new Customer("Jin", "Necesario", 120, true);

        it('Test if have inherited the properties that was initialized via super', () => {

            //check if customer is an instance of Person
            expect(customer).to.be.an('object');
            expect(customer).to.be.instanceOf(Person);

            //check if customer instance have inherited the properties of the Person class
            expect(customer).to.have.property("firstName");
            expect(customer).to.have.property("lastName");
            expect(customer).to.have.property("age");
        });
    });