function payee(grossSalary) {
  if (grossSalary >= 24000) {
    return grossSalary * 0.5;
  } else if (grossSalary >= 24001 && grossSalary <= 32333) {
    return grossSalary * 0.25;
  } else if (grossSalary > 32333) {
    return grossSalary * 0.3;
  } else {
    console.log("Invalid input");
  }
}

function nhif(grossSalary) {
  if (grossSalary <= 5999) {
    var nhifTax = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    var nhifTax = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    var nhifTax = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    var nhifTax = 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    var nhifTax = 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    var nhifTax = 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    var nhifTax = 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    var nhifTax = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    var nhifTax = 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    var nhifTax = 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    var nhifTax = 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    var nhifTax = 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    var nhifTax = 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    var nhifTax = 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    var nhifTax = 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    var nhifTax = 1600;
  } else if (grossSalary >= 100000) {
    var nhifTax = 1700;
  } else {
    console.log("gross pay below minimum range");
  }
  return nhifTax;
}

function nssf(grossSalary) {
  if (grossSalary <= 6000) {
    var nssfTax = 360;
  } else if (grossSalary >= 6100 && grossSalary <= 18000) {
    var nssfTax = grossSalary * 0.6;
  } else if (grossSalary > 18000) {
    var nssfTax = 720;
  } else {
    console.log("gross pay below minimum range");
  }
  return nssfTax;
}

function deductions(grossSalary) {
  var one = payee(grossSalary);
  var two = nhif(grossSalary);
  var three = nssf(grossSalary);
  return one + two + three;
}

function netSalary(grossSalary, benefits) {
  let totalSalary = grossSalary + benefits;
  let loss = deductions(grossSalary);
  return totalSalary - loss;
}
let grossSalary = parseInt(50000); //Enter gross salary
let benefits = parseInt(7000); //Enter the total of the benefits

let outPut = netSalary(grossSalary, benefits);
console.log(`Net salary = ${outPut}`);
