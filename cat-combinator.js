/**
 * Mama Cat
 * 
 * Define an object called cat1 that contains the following properties:
    Name
    Breed
    Age (a number)
 * console.log() the cat's age.
 * console.log() the cat's breed.
 */

 let cat1 = {
   name: 'Goofy',
   breed: 'Long Haired Tabby',
   age: 15
 }

 console.log(cat1.age);
 console.log(cat1.breed);

 /**
  * Papa Cat
  * 
  * Define an object called cat2 that also contains the properties:
    Name
    Breed
    Age (a number)
  */

 let cat2 = {
  name: 'Pops',
  breed: 'Chantilly/Tiffany',
  age: 17
}

/**
 * Combine Cats!
 * 
 * Write a function, combineCats(), that has two parameters: mama and papa. 
 * The function will take two arguments; each a cat object.
 * 
 * Pass cat1 and cat2 as arguments to the combineCats() function. 
 * The function should console.log() them.
 */

 const combineCats = (mama, papa) => {
  console.log({ mama, papa });
 }

 combineCats(cat1, cat2);

 const combineCatsV2 = (mama, papa) => {
  let combinedCats = {};

  combinedCats.age = Math.abs(mama.age - papa.age);
  combinedCats.name = mama.name.slice(0, mama.name.length/2) + papa.name.slice(papa.name.length/2);
  combinedCats.breed = mama.breed === papa.breed ? 
    combinedCats.breed = mama.breed : 
    combinedCats.breed = `${mama.breed}-${papa.breed}`;
  
  console.log(combinedCats);
 }

combineCatsV2(cat1, cat2);

