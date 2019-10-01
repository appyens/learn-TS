function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Anurag", lastName: "Gundappa" };
document.body.textContent = greeter(user);
