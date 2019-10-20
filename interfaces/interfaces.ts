// Interfaces allow us to create contracts other classes / objects have to implement
// We can use them to define custom types without creating classes
// Interfaces are not compiled to JS! Its just for checking done

import {ExportedClass} from "../modules/modules";

interface User {
    username: string;
    password: string;
    confirmpassword?: string; // optional property does not have to be implemented
}

let user: User;
// error coz it does not satisfy User interface
// user = {anything: 'anything', anynumber: 5};
user = {username: 'Anurag', password: 'secret'};

// Interfaces can also contain functions

interface CanDrive {
    accelerate(speed: number): void;
}

let car: CanDrive = {
    accelerate: function(speed: number) {
        //..
    }
};

let e: ExportedClass;
