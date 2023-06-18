function calculateGrade(marks) {
  if (marks >= 0 && marks <= 100) {
    if (marks > 79) {
      return "A";
    } else if (marks >= 60 && marks <= 79) {
      return "B";
    } else if (marks >= 50 && marks <= 59) {
      return "C";
    } else if (marks >= 40 && marks <= 49) {
      return "D";
    } else return "E";
  } else {
    return "not within valid range";
  }
}
let marks = parseInt(20); // Enter marks here
let outCome = calculateGrade(marks);
console.log(outCome);
