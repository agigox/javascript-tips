const obj_1 = {
    firstName: "Amine",
    lastName: "TABOU"
}

function getName(profession, country) {
    console.log(this);
    return this.firstName + " " + this.lastName + " - " + profession + ", " + country;
}

function getFirstName() {
    console.log("This in a function : ", this);
}

const arguments_01 = ["Software engineer 01", "Morocco 01"];
const arguments_02 = ["Software engineer 02", "Morocco 02"];
const arguments_03 = ["Software engineer 03", "Morocco 03"];

/**
 * The call() method calls a function with a given this value and arguments provided individually.
 * While the syntax of this function is almost identical to that of apply(),
 * the fundamental difference is that call() accepts an argument list,
 * while apply() accepts a single array of arguments.
 */
// function.call(thisArg, arg1, arg2, ...)
const mssg_01 = getName.call(obj_1, ...arguments_01);
// The apply() method calls a function with a given this value, and arguments provided as an array
// function.apply(thisArg, [argsArray])
const mssg_02 = getName.apply(obj_1, arguments_02);

// function.bind(thisArg[, arg1[, arg2[, ...]]])
/**
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
 */
// The return value is A copy of the given function with the specified this value and initial arguments.
const mssg_03 = getName.bind(obj_1);

console.log(mssg_01);
console.log(mssg_02);
console.log(mssg_03(...arguments_03));

getFirstName();

/**
 * Calling apply with null as the first argument is like calling the function 
 * without providing any object for the this
 */

const numbers = [1, 22, 123, 12];
console.log(Math.max(...numbers));
console.log(Math.max.call(null, ...numbers));
console.log(Math.max.call(Math, ...numbers));
console.log(Math.max.apply(null, numbers));
console.log(Math.max.apply(Math, numbers));

// The result of calling the function with the specified this value and arguments.


