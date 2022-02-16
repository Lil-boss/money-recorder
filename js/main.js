function expenseCal() {
  const incomeInput = document.getElementById("income-input");
  const incomeValue = parseInt(incomeInput.value);

  const foodinput = document.getElementById("food-input");
  const foodValue = parseInt(foodinput.value);
  console.log(foodValue);
  const rentInput = document.getElementById("rent-input");
  const rentValue = parseInt(rentInput.value);

  console.log(rentValue);
  const clothsInput = document.getElementById("cloth-input");
  const clothsValue = parseInt(clothsInput.value);
  console.log(clothsValue);

  const totalExpenses = foodValue + rentValue + clothsValue;
  const totalBalance = incomeValue - totalExpenses;
  console.log(totalBalance);
  if (isNaN(incomeValue, rentValue, foodValue, clothsValue)) {
    console.log("this not number ");
  } else {
    document.getElementById("total-expense").innerText = totalExpenses;
    document.getElementById("total-balance").innerText = totalBalance;
  }
}

function savingCal() {
  const totalBalanceInput = document.getElementById("total-balance");
  const totalValue = parseFloat(totalBalanceInput.innerText);
  const saveInput = document.getElementById("saveing-input");
  const saveValue = parseFloat(saveInput.value);

  const saving = (totalValue * saveValue) / 100;
  if ((totalValue) => saving) {
    document.getElementById("save-money").innerText = saving;
  } else {
    console.log("not enough money");
  }
}
