let stars = [
  "Polaris",
  "Aldebaran",
  "Deneb",
  "Vega",
  "Altair",
  "Dubhe",
  "Regulus",
];
let cons = [
  "Ursa Minor",
  "Tarurus",
  "Cygnus",
  "Lyra",
  "Aquila",
  "Ursa Major",
  "Leo",
];

function findConstellation(str) {
  let ind = getStringIndex(str);
  if (ind >= 0) {
    alert(`The star is in the ${cons[ind]} constellation.`);
  } else {
    alert(`Sorry, we do not have this star in our list.`);
  }
}

function getStringIndex(s) {
  let ind = -1;
  for (let index in stars) {
    if (s === stars[index]) ind = index;
  }
  return ind;
}

let star_name = prompt("Enter a star name in capitalization:");
findConstellation(star_name);
