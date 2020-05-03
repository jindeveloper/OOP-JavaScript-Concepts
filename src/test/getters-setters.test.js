import { Customer } from '../getters-setters/getter-setters';
import { expect } from 'chai';

describe("Test the getters and setters of the Customer class",
    () => {

        let firstName = "Jin", lastName = "Necesario", isPrimeMember = true;

        let customer = new Customer(firstName, lastName, isPrimeMember);

        it('check wheter we have a valid instance', () => {
            //let us check the customer object
            expect(customer).to.be.an('object', 'customer is an object');
            expect(customer).to.be.an.instanceOf(Customer, 'customer is an instance of the Customer class');
        });

        it('Checks the object if has valid getters', () => {

            //let us check if the customer object does have the correct values
            expect(customer.firstName).to.be.a('string').and.equal(firstName, `Customer's firstname is ${firstName}`);
            expect(customer.lastName).to.be.a('string').and.equal(lastName, `Customer's firstname is ${lastName}`);
            expect(customer.isPrimeMember).to.be.a('boolean').and.equal(isPrimeMember, `Customer's firstname is ${isPrimeMember}`);

        });

        it('Checks whether the object if has valid setters', () => {

            //let us reassign new values for the customer instance
            customer = { firstName: "Scott", lastName: "Summers", isPrimeMember: false};
          
            expect(customer.firstName).to.be.a('string').and.equal('Scott', `Customer's firstname is ${firstName}`);
            expect(customer.lastName).to.be.a('string').and.equal('Summers', `Customer's firstname is ${lastName}`);
            expect(customer.isPrimeMember).to.be.a('boolean').and.equal(false, `Customer's firstname is ${isPrimeMember}`);

        });
    });