// not preferred way to create a object like this
var person = new Object();
// operator is []
// this is computed member access
person["firstName"] = "dummy first name";
person["lastName"]  = "heisenburg";

// we can use . operator which will take object and String as parms
// . is members operators
person.middleName = "hh";

// Can use any number objects
person.address = new Object();
person.address.state = "CA";

person.address.street = new Object();
person.address.street.street1 = "Dummy street1";
person.address.street.street2 = "Dummy street2";

// person.address.state
// person["address"]["state"]
// both of the above statements are same
