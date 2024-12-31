//- Calculate the payout for each employee
//and write it into the span.salary field for each employee.

//Add a bonus immediately: if an employee worked more than 160 hours,
//they receive double the hourly rate for every additional hour.

//Highlight in red the employees who worked fewer than 100 hours.

const workedHours = document.querySelectorAll(".czas");
const rate = document.querySelectorAll(".stawka");
const calculate = document.getElementById("oblicz");
const payments = document.querySelectorAll(".wyplata");
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
    } else {
      arrayHoursWorked[i].previousElementSibling.style.backgroundColor = "";
    }
  }
}

function giveBonus(theHourWorked, theRate) {
  if (theHourWorked > 160) {
    const base = 160 * theRate;
    const bonus = theRate * 2 * (theHourWorked - 160);
    return base + bonus;
  } else {
    return theHourWorked * theRate;
  }
}

function calculatePayout() {
  const AllHoursWorked = getValuesOfInputs(workedHours);
  const AllRates = getValuesOfInputs(rate);
  const result = [];
  for (let i = 0; i < AllHoursWorked.length; i++) {
    result.push(giveBonus(AllHoursWorked[i], AllRates[i]));
  }
  return result;
}

function topThreePerformers(allPerformers) {
  bestEmployees.innerHTML = "";
  const nodeArray = Array.from(allPerformers);
  const theBest = [];
  const sortedPerformers = getValuesOfInputs(allPerformers).sort(
    (a, b) => b - a
  );
  console.log(sortedPerformers);
  for (let i = 0; i < sortedPerformers.length; i++) {
    let index = nodeArray.findIndex(
      (element) => element.value === `${sortedPerformers[i]}`
    );
    theBest.push(allPerformers[index].previousElementSibling.innerText);
  }
  for (let i = 0; i < 3; i++) {
    const unOrderedList = document.createElement("ul");
    const item = document.createElement("li");
    item.innerText = theBest[i];
    unOrderedList.appendChild(item);
    bestEmployees.appendChild(unOrderedList);
  }
}

calculate.addEventListener("click", () => {
  for (let i = 0; i < payments.length; i++) {
    payments[i].innerText = calculatePayout()[i];
  }
  getLowerWorkedHours(workedHours);
  topThreePerformers(workedHours);
});
