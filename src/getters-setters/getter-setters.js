 class Customer{

    #_firstName; 
    #_lastName;
    #_isPrimeMember;

    constructor(firstName, lastName,  isPrimeMember){
        this.#_firstName = firstName;
        this.#_lastName = lastName;
        this.#_isPrimeMember = isPrimeMember;
    }

    get firstName(){
        return this.#_firstName;
    }

    set firstName(value){
        this.#_firstName = value;
    }

    get lastName(){
        return this.#_lastName;
    }

    set lastName(value){
        this.#_lastName = value;
    }

    get isPrimeMember(){

        return this.#_isPrimeMember;
    }
}

export {Customer};
