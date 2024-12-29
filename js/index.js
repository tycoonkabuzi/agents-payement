//- Calculate the payout for each employee
//and write it into the span.salary field for each employee.

//Add a bonus immediately: if an employee worked more than 160 hours,
//they receive double the hourly rate for every additional hour.

//Highlight in red the employees who worked fewer than 100 hours.

const workedHours = document.querySelectorAll(".czas");
const rate = document.querySelectorAll(".stawka");
const calculate = document.getElementById("oblicz");
const payements = document.querySelectorAll(".wyplata");
const bestEmployees = document.getElementById("najlepsi-pracownicy");

function getValuesOfInputs(theInputs) {
  let anInputNumberArray = [];
  for (const anInput of theInputs) {
    anInputNumberArray.push(Number(anInput.value));
  }
  return anInputNumberArray;
}

function getLowerWorkedHours(arrayHoursWorked) {
  for (let i = 0; i < arrayHoursWorked.length; i++) {
    if (Number(arrayHoursWorked[i].value) < 100) {
      arrayHoursWorked[i].previousElementSibling.style.backgroundColor = "red";
    }
  }
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

function topThreePerformers(allPerformers) {
  bestEmployees.innerHTML = "";
  let nodeArray = Array.from(allPerformers);
  let thebest = [];
  let sortedPerformers = getValuesOfInputs(allPerformers).sort((a, b) => b - a);

  for (let i = 0; i < sortedPerformers.length; i++) {
    let index = nodeArray.findIndex(
      (element) => element.defaultValue === `${sortedPerformers[i]}`
    );
    thebest.push(allPerformers[index].previousElementSibling.innerText);
  }
  for (i = 0; i < 3; i++) {
    let unOrderedList = document.createElement("ul");
    let item = document.createElement("li");
    item.innerText = thebest[i];
    unOrderedList.appendChild(item);
    bestEmployees.appendChild(unOrderedList);
  }
}

calculate.addEventListener("click", () => {
  for (let i = 0; i < payements.length; i++) {
    payements[i].innerText = calculatePayout()[i];
  }
  getLowerWorkedHours(workedHours);
  topThreePerformers(workedHours);
});
