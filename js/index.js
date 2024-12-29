//- Calculate the payout for each employee
//and write it into the span.salary field for each employee.

//Add a bonus immediately: if an employee worked more than 160 hours,
//they receive double the hourly rate for every additional hour.

const workedHours = document.querySelectorAll(".czas");
const rate = document.querySelectorAll(".stawka");
const calculate = document.getElementById("oblicz");
const payements = document.querySelectorAll(".wyplata");

function getValuesOfInputs(theInputs) {
  let anInputNumberArray = [];
  for (const anInput of theInputs) {
    anInputNumberArray.push(Number(anInput.value));
  }
  return anInputNumberArray;
}

function giveBonus(theHourWorked, theRate) {
  let bonus;
  if (theHourWorked > 160) {
    let base = 160 * theRate;
    bonus = theRate * 2 * (theHourWorked - 160);
    return base + bonus;
  } else {
    return theHourWorked * theRate;
  }
}

function calculatePayout() {
  const AllHoursWorked = getValuesOfInputs(workedHours);
  const AllRates = getValuesOfInputs(rate);
  let result = [];
  for (let i = 0; i < AllHoursWorked.length; i++) {
    result.push(giveBonus(AllHoursWorked[i], AllRates[i]));
  }
  return result;
}
calculate.addEventListener("click", () => {
  for (let i = 0; i < payements.length; i++) {
    payements[i].innerText = calculatePayout()[i];
  }
});
