
import { Customer } from '../class-creation/class_creation';
import { expect } from 'chai';

describe("Test if we can create new instance of Customer class",
    () => {
        it('returns instanceof customer', () => {

            let customer = new Customer();

            expect(customer).to.be.an('object');
            expect(customer).to.be.an.instanceOf(Customer);

        });
});

