/**
 * Slimer
 * 
 * Given the slimer object, do the following: 
 * console.log() the name.
 * Change the type to 'creature'.
 * Add a property to the object called age, and set its value to 6.
 * console.log() the object to make sure type and age are what you want them to be. 
 * Give the monster a method to introduce himself, interpolating some of his properties. 
 * Call the method.
 */

const monster = {
  name: "Slimer",
  color: "greenish",
  type: "plasm or ghost or something"
}

console.log(monster.name);

monster.type = 'creature';

monster.age = 6;

console.log(monster);

monster.intro = function() {
  console.log(`Hi, my name is ${this.name}. I am ${this.color} in color and I'm like a type of ${this.type}.`);
}

console.log(monster.intro());