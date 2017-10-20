//Java Script Engine
// Execution Parser
// Global Object will create this(window, this)

//JavaScript Hoisting
// will give undefined if you put declaration before variable
// like console.log(a); a= “hello”;
// Functions will still be called

//Execution Context is created in two phases
//Creation Phase
// First all the variables and the functions will be kept in global object
// all variables are set as undefined, we should never set something to undefined. Js                                  should do that

//Execution Phase
// This is will all your code after the creation phase
// JS is single-thretred synchronous

//Invocation: Run the function(Invoke the function) by using parenthesis ()

//Functions Execution:
// Every function will create a new execution context which will be in execution stack.
// It will execute synchronously line by line

//Variable Environment:
// where the variable lives and how they relate to each other

//The Scope Chain:
function b()
{
  function a()
  {

  }
}
//function a will not be part of global env. It will be part of b’s lexical env.

//EcmaScript 6 or Es 2015:
// let: This is not replacement for “var"
// This will not allow you to use the variable before declaration like
//console.log(a);
//let a ="hello satya";

//Asynchronous Calling:
// More than one at a time
// first the functions will be called and then the events will be in event loop and they will get called
/*
function longTimeFunction()
{
    var ms = 3000 + new Date().getTime();

    while(new Date() < ms){}

    console.log("finished function");
}

document.addEventListener("click",function()
{
    console.log("click happned!");
});

longTimeFunction();
console.log("finished exec");
*/

