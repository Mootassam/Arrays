const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
// MAP
// Get an array of all names
const mapNames = characters.map((name) => name.name);
console.log(mapNames);
// Get an array of all heights
const mapHeights = characters.map((height) => height.height);
console.log(mapHeights);
// Get an array of objects with just name and height properties
const object = characters.map((object) => {
  return { name: object.name, height: object.height };
});
console.log(object);
// Get an array of all first name
const firstname = characters.map((first) => first.name.split(" ")[0]);
console.log(firstname);

// FILTER
// Get characters with mass greater than 100
const filter = characters.filter((filer) => filer.mass > 100);
console.log(filter);
// Get characters with height less than 200
const filermass = characters.filter((filter) => filter.height < 200);
console.log(filermass);
// Get all male characters
const filtermale = characters.filter((filter) => filter.gender === "male");
console.log(filtermale);
// Get all female characters
const filterfemale = characters.filter((filter) => filter.gender === "female");
console.log(filterfemale);
// splice 

var data = [1,2,3,4,5];

function moveItem(from, to) {
  // remove `from` item and store it
  var f = data.splice(from, 1)[0];
  // insert stored item into position `to`
  data.splice(to, 0, f);
}

moveItem(0, 2);

console.log(data);

// SORT

// Sort by mass
const sortmass = characters.sort((a, b) => a.mass - b.mass);
console.log("asc", sortmass);
// Sort by height
const sortHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortHeight);
// Sort by gender
const sortGender = characters.sort((a, b) => {
  if (a.gender > b.gender) return -1;
  return 1;
});
console.log(sortGender);
// Sort by name
const sortName = characters.sort((a, b) => {
  if (a.name > b.name) return -1;
  return 1;
});
console.log(sortName);
// EVERY
// Does every character have blue eyes?
const everycolor = characters.every((every) => every.eye_color === "blue");
console.log(everycolor);
// Does every character have mass more than 40?
const everymass = characters.every((every) => every.mass > 40);
console.log(everymass);
// Is every character shorter than 200?
const everyheight = characters.every((every) => every.height > 200);
console.log(everyheight);
// Is every character male?
const everygender = characters.every((every) => every.gender === "male");
console.log(everygender);

// SOME include
// Is there at least one male character?
const somegender = characters.some((some) => some.gender === "male");
console.log(somegender);
// Is there at least one character with blue eyes?
const somecolor = characters.some((some) => some.eye_color === "blue");
console.log(somecolor);
// Is there at least one character taller than 200?
const someheight = characters.some((some) => some.height > 200);
console.log(someheight);
// Is there at least one character that has mass less than 50?
const somemass = characters.some((some) => some.mass < 50);
console.log(somemass);

// REDUCE
// Get the total mass of all characters
const totaleMass = characters.reduce((a, b) => a + b.mass, 0);
console.log(totaleMass);

// Get the total height of all characters
const totaleHeights = characters.reduce((a, b) => a + b.height, 0);
console.log(totaleHeights);
// Get the total number of characters in all the character names
const reducenames = characters.reduce((acc, cur) => {
  if (acc[cur.eye_color]) {
    acc[cur.eye_color]++;
  } else {
    acc[cur.eye_color] = 1;
  }
  return acc;
}, {});
console.log(reducenames);
// Get the total number of characters by eye color (hint. a map of eye color to count)
const reducecolor = characters.reduce((a, b) => a + b.eye_color.length, 0);
console.log(reducecolor);
