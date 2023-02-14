const calculateBtn = document.getElementById("calculate-button");
const resetBtn = document.getElementById("reset-button");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const resultArea = document.getElementById("result");

const calculateBmi = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +weightInput.value;
  const bmi = enteredWeight / (enteredHeight * enteredHeight);

  if (isNaN(bmi)) {
    alert("Not a number , please check input!");
    return;
  }
  const resultElement = document.createElement("ion-card");
  resultElement.innerHTML = `
  <ion-card-content>
    <h2>${bmi}</h2>
  </ion-card-content>
  `;
  resultArea.innerHTML = ``;
  resultArea.appendChild(resultElement);
};
const resetInputs = () => {
  heightInput.setAttribute("value", "");
  weightInput.setAttribute("value", "");
  bmi = 0;
};
calculateBtn.addEventListener("click", calculateBmi);
resetBtn.addEventListener("click", resetInputs);
