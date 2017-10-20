// This is not a static type like java
// JS is Dynamic Typing
// This is not a Object- which is name value pair

//Primitive Types
// "Undefined" represents lack of existence - Don't use in code
// "null" represents lack of existence - we can use it
// boolean true/false
// number it is floating point number(always has decimals) fake it to make integer
// String sequence of characters. both '' and "" are used
// Symbol used in ES6

//Operators
// A special function written differently(takes two and returns something)
//Example
var sum = 3 + 4; // +(3,4) + is a function name
// Uses infix notation - operator sits between two params
// other operators -, >, <

//Operator Precedence
// Which operator function will called first
// Higher precedence wins - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Example
var a = 3 + 4 * 5;
// when it have same associativity.
var a = 2, b = 3, c = 4;
a=b=c;
// This is will be from right to left so all are equal to 4

//Coercion
// Converting a value from one type to another
var sunIntString = undefined + true;
// This will output number

//Comparison
var b = 3 < 2 < 1;
// 3<2 is false
// now we send < function false<1
// Number(false) coerce to 0 and Number(true) coerce to true
// 0<1 is true
var b = 1 < 2 < 3;
//Number(true) is 1 and 1<3 is true

//Equality comparisons and sameness
// coercing a undefined will give you NaN
// coercing a null will give you 0
// 3 == 3 is true and "3" == 3 is also true as js coerced String 3 to number 3
// === is Strict equality compares two values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

//Dynamic types useful?
var a;

if (a)
{
 // This is not executed as a is undefined
 // this can be used for null
 // Boolean(0) evaluates to false
}


