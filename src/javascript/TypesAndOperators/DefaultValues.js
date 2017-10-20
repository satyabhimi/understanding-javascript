//calling a function without arguments is allowed in js
//but have undefined value is assigned
sayMyName();
function sayMyName(name)
{
 // if we don't pass name in it is undefined
 // we can use || operator meaning function to determine undefined value
 name = name || "default Name";// this will return default if name is undefined
}

//Framework Aside
// frameworks check for variable name
// window.existingName = window.existingName || "use name from this file";
