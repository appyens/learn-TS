// annotations
function anotations(person: string) {
    return "Hello, " + person
}

let user = "Anurag";
let result = anotations(user);
alert(result);

// type annotations
function greeter(person: string) {
    return "Hello, " + person
}

// user = [0, 1, 2];
result = greeter(user);
alert(result);