import { Customer} from '../constructors/learning-constructors';
import { expect } from 'chai';

describe("Test if constructors are called when a new instance is created",
    () => {
        it('returns instanceof customer', () => {

            let customer = new Customer();

            expect(customer).to.be.an('object');
            expect(customer).to.be.an.instanceOf(Customer);

        });
});