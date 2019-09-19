/**
 * Ogres
 * 
 * Let's say you want to create an adventure in which an adventurer and an ogre fight each other.
 * 
 * Spend a few minutes reading this question a couple of times, thinking and pseudocoding before you actually write the code.
 * 
 * Write a small program that will simulate a battle between your adventurer and an ogre.
 * 
 * The battle should play out automatically.
 * The ogre and adventurer will take turns attacking each other, and statistics will be shown after each attack.
 * The ogre's attacks should have random damage value, but the adventurer should always attack with the same value.
 * Whenever someone's hitpoints go below zero, the other wins the battle.
 * Create objects and have them interact. Remember, you are modeling things from real life. 
 * Just like the characters you are modeling, your objects will have properties (qualities) and methods (things they can do).
 * 
 * How would you define your adventurer? Your adventurer will want a name and hitpoints. 
 * What else would your adventurer need?
 * How would you define an ogre? Your ogre will want hitpoints, right?
 * How could you implement the "attack" functionalities? 
 * Should you do this by adding methods to the objects? 
 * Should those methods take parameters?
 * Use console.log() to show each attack, how many hitpoints the person being attacked loses, and the updated stats for the ogre and adventurer. 
 * At the end, log the winner.
 * You can use a loop to make the game play out. But what kind of loop? How and when will it stop?
 * Would it be helpful to create another object to control and keep track of other data that isn't specifically about the ogre or the adventurer? Such as a game object, perhaps?
 */

const adventurer = {
  name: '',
  hp: 1000,
  ap: 100,
  attack() {
    // static value
    console.log('adventurer attacks!');
    ogre.hp -= this.ap;
    console.log(`ogre's remaining health points: `, ogre.hp);
    atPlay = ogre;
  }
}

const ogre = {
  hp: 1000,
  maxAP: 200,
  attack() {
    // random value
    console.log('ogre attacks!');
    let ap = Math.floor(Math.random() * Math.floor(this.maxAP));
    adventurer.hp -= ap; 
    console.log(`adventurer's remaining health points: `, adventurer.hp);
    atPlay = adventurer;
  }
}

let atPlay = adventurer;

while (adventurer.hp > 0 && ogre.hp > 0) {
  atPlay.attack();
}

adventurer.hp > 0 ? console.log('adventurer won!!!') : console.log('ogre won!!!');
