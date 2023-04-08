const add = function() {
    return arguments[0] + arguments[1]; //Arguments only exist in arrow functions 
}

console.log(add(11,22,33,44));

const car = {
    color : "red",
    // getSummary : function() {
    //     return `The car is ${this.color}`;
    // }
    getSummary() {
        return `The car is ${this.color}`;
    }
}

console.log(car.getSummary());

//arrow functions dont bind arguments
//arrow functions dont use this keyword