function checkSpeed(speed) {
  const range = 5;
  const speedLimit = 70;
  const pointLimit = 12;
  if (speed <= speedLimit) {
    return "Ok";
  } else {
    const pastSpeedL = speed - speedLimit;
    const points = Math.floor(pastSpeedL / range);
    if (points > pointLimit) {
      return "LICENSE SUSPENDED";
    } else if (points <= pointLimit) {
      return `points: ${points}`;
    }
  }
}
const speed = parseInt("75");
console.log(checkSpeed(speed));
