var people = ["Joe", "Amy", "Garrett", "Mark", "Matt", "Sandro", "Sharmila", "Rob", "Bri", "Rithy"];
// Range is 0 to 10, since using floor the program can't reach 11. Thus the range is 0 to 9, ten total possibilites
for (i = 0; i < 5; i++) { // Run this six times to generate six groups
  var pick1 = Math.floor(Math.random()*11);
  var pick2 = Math.floor(Math.random()*11);
  // Change one of the numbers if they are the same
  while (pick1 === pick2) {
    pick2 = Math.floor(Math.random()*11);
  }
  console.log(people[pick1] + " and " + people[pick2] + " are a group!");
} //ends for loop

//This program is a good start, but ultimately incorrect. People already selected for a group can and often are palced in another group. The while loop only prevents the same person from being paired with themselves. 
