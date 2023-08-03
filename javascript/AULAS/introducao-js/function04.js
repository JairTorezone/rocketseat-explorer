//function scope
let subect = "create video";

function createThink() {
  subect = "study";
  return subect;
}

createThink();
console.log(subect);
createThink();
console.log(subect);
