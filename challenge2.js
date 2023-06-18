function checkSpeed(speed) {
  const points = 5;
  const speedLimit = 70;
  const pointLImit = 12;
  if (speed <= speedLimit) {
    return "Kudos! Keep driving safetly";
  } else {
    const pastSpeedL = speed - speedLimit;
    const points = Math.floor(speed / points);
    if (points > pointLImit) {
      return "LICENCED SUSPENDED";
    } else {
      return `points ${points}`;
    }
  }
}
const speed = parseInt("200");
console.log(checkSpeed(speed));
