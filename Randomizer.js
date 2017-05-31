var people = ["Joe", "Amy", "Garrett", "Mark", "Matt", "Soldo", "Saliana", "Rob", "Bri", "FilipinoDude", "ThreeKiddos", "ExtraPerson"];
// Range is 0 to 10, since using floor the program can't reach 12. Thus the range is 0 to 11, 12 total possibilites
for (i = 0; i < 6; i++) { // Run this six times to generate six groups
  var pick1 = Math.floor(Math.random()*12);
  var pick2 = Math.floor(Math.random()*12);
  // Change a number if they are the same
  while (pick1 === pick2) {
    pick2 = Math.floor(Math.random()*12);
  }
  console.log(people[pick1] + " and " + people[pick2] + " are a group!");
} //ends for loop
