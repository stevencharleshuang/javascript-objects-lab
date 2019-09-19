/**
 * Syntax
 * 
 * List and describe each individual piece of syntax that we use to construct an object. 
 * Don't leave anything out! 
 * This list is finite.
 */

const syntax = {
  'Object Literal Syntax': `Object literal syntax is accomplished by declaring a variable and assigning an object to it. The object can be initialized as empty or given key-value pairs.`,
 
  'Constructor Function': `Creating objects with constructor functions is done by a capitalized named function construction and then binding its properties to itself. Instances are instantiated by declaring a variable and then using the 'new' keyword to assign the new instance of the object to the variable. By using a constructor function, we can instantiate multiple instances of the object.`,
 
  'Object.create()': `The Object.create() method is achieved by first creating an object using the Object Literal syntax, but capitalize the assigned variable to denote that this is a class object. Then, instantiate instances of the the class object by declaring a variable and assigning it the value of Object.create(Obj) where Obj is the class being instantiated.`
}

console.log(syntax);