
import { Customer } from '../class-with-properties/class-with-properties';
import { expect } from 'chai';

describe("Test if class have the following properties firstName,lastName,birthDate and country",
    () => {

        let customer = new Customer({ firstName: "Jin", lastName: "Necesario", birthDate: "1/1/2000", country: "PHP" });

        it('check if the customer has a static property and check its value', () => {

            expect(Customer).itself.to.have.property("MinAgeForEntry")
                            .to.be.equal(20, '20 should be the value');
        });

        it('check if the customer object have the following properties firstName, lastName,birthDate and country', () => {

            expect(customer).to.have.property("firstName");
            expect(customer).to.have.property("lastName");
            expect(customer).to.have.property("birthDate");
            expect(customer).to.have.property("country");

        });

        it('check the properties values', () => {

            expect(customer.firstName).to.be.equal("Jin");
            expect(customer.lastName).to.be.equal("Necesario");
            expect(customer.birthDate).to.be.equal("1/1/2000");
            expect(customer.country).to.be.equal("PHP");

        });
    });