"use strict";
// Interfaces allow us to create contracts other classes / objects have to implement
// We can use them to define custom types without creating classes
// Interfaces are not compiled to JS! Its just for checking done
exports.__esModule = true;
var user;
// error coz it does not satisfy User interface
// user = {anything: 'anything', anynumber: 5};
user = { username: 'Anurag', password: 'secret' };
var car = {
    accelerate: function (speed) {
        //..
    }
};
var e;
