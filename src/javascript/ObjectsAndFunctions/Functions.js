//Functions
// functions are objects
// these are special kind of objects
// the code we write inside the object(function) is invokable
function greet()
{

}
// we can declare the function as object
// greet.something = "some";

// object is
var someObject = { name: "someName" , type : "someType" };

// this is function statement
//someFunctiion();
function someFunctiion(a)
{
    //console.log(a);
}

// this is function assignment
var testFunction = function () {
    //console.log("inside test");
}

testFunction();

// we can pass a function to an other function
// this is called functional programming
function hello(a)
{
    a();
}

hello(function()
{
    console.log("hello");
});
