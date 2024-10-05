// function that receives a fucntion and calls it
function receivesAFunction(callbak) {
    callbak();
}
//function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        consol.log("i am namedFunction");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("i am anonymousFunction");
    }
}