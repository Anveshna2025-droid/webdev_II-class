function sample(callback){
    console.log("This is a sample function.")
    callback()
}

function test(){
    console.log("This is a test function.")
}
sample(test);
//callback is asynchronous function in which we pass a function as an argument to another function.
//asynchronous function : when we can move to another function without waiting for the previous function to complete its execution.
//here callback is test function which is passed as an argument to sample function.
//map(callback): it is used to iterate over an array and apply the callback function to each element of the array and return a new array with the modified elements
//task:rev everything and methods , till high order functions.