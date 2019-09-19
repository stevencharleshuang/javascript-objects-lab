/**
 * Me
 * 
 * Create an empty object called me.
 * Assign it properties for name, age, and email with corresponding values. 
 * Afterward, logging the object should produce the following output:
    {
      name: "Kristyn",
      age: 42,
      email: "kristyn@foo.bar"
    }   
 * Using dot notation, log only the name property in your object.
 * Using bracket notation, update the value of age to be 43 years old.
 * Using dot notation, console.log() age to verify that it has been updated.
 * Add a property to this object called "place of residence" and give it a value of your hometown. 
 * Note that the key has spaces, therefore you cannot use dot notation.
 * Print the value of "place of residence".
 */

let me = {}

me.name = "Kristyn";
me.age = 42;
me.email = "kristyn@foo.bar";

console.log(me.name);

me['age'] = 43;

console.log(me.age);

me['place of residence'] = 'Staten Island'

console.log(me['place of residence']);