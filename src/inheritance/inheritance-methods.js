class Person {

    speak(){

        return "I'm a person speaking";
    }

    jump(){

        return "I jump high";
    }
}

class Customer extends Person{
    
    speak(){

        return `When person speaks: ${super.speak()}. When the customer speaks: Hi! I'm a customer`;
    }

    jump() {

        return "Overriding jump, a customer doesn't jump";
    }
}

export { Person, Customer}