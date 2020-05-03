import { Customer} from '../inheritance/inheritance-methods';
import { expect } from 'chai';

describe("Test inheritance methods",
    () => {
        it('Test the methods', () => {

            let customer = new Customer();
            
            let resultOfPersonSpeaking  = customer.speak();
            
            let resultOfPersonJumping = customer.jump();

            expect(resultOfPersonSpeaking)
                .to.be
                .equal("When person speaks: I'm a person speaking. When the customer speaks: Hi! I'm a customer");

            expect(resultOfPersonJumping)
                .to.be
                .equal("Overriding jump, a customer doesn't jump");

        });
});