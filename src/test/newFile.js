import { Customer } from '../class-with-methods/class-with-methods';
import { expect } from 'chai';
describe("Test if class have the following methods getFullName and getCustomerCompleteInfo", () => {
    let customer = new Customer({ firstName: "Jin", lastName: "Necesario", birthDate: "1/1/2000", country: "PHP" });
    it('checks the methods', () => {
        let completeInfo = 'Mr./Ms. Necesario, Jin was born in PHP on 1/1/2000 and currently 20 years of age.';
        //instance methods
        expect(customer.getFullName()).to.be.equal("Mr./Ms. Necesario, Jin");
        expect(customer.getCustomerCompleteInfo()).to.be.equal(completeInfo);
        //static methods
        expect(Customer.isLeapYear()).to.be.a('boolean').to.be.oneOf([true, false]);
    });
});
