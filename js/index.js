//- Calculate the payout for each employee
//and write it into the span.salary field for each employee.
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
function calculatePayout() {
  const AllHoursWorked = getValuesOfInputs(workedHours);
  const AllRates = getValuesOfInputs(rate);
  let result = [];
  for (let i = 0; i < AllHoursWorked.length; i++) {
    result.push(AllHoursWorked[i] * AllRates[i]);
  }
  return result;
}
calculate.addEventListener("click", () => {
  for (let i = 0; i < payements.length; i++) {
    payements[i].innerText = calculatePayout()[i];
  }
});
