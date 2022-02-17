//expense section
function expenseCal() {
  const incomeInput = document.getElementById("income-input");
  const incomeValue = parseInt(incomeInput.value);
  if (incomeValue < 0 || isNaN(incomeValue)) {
    alert("your income is not valid");
    return false;
  }

  const foodInput = document.getElementById("food-input");
  const foodValue = parseInt(foodInput.value);
  if (foodValue < 0 || isNaN(foodValue)) {
    alert("your Food is not valid");
    return false;
  }
  const rentInput = document.getElementById("rent-input");
  const rentValue = parseInt(rentInput.value);
  if (rentValue < 0 || isNaN(rentValue)) {
    alert("your Rent is not valid");
    return false;
  }
  const clothInput = document.getElementById("cloth-input");
  const clothsValue = parseInt(clothInput.value);
  if (clothsValue < 0 || isNaN(clothsValue)) {
    alert("your Cloths is not valid");
    return false;
  }
  const totalExpenses = foodValue + rentValue + clothsValue;
  const totalBalance = incomeValue - totalExpenses;

  document.getElementById("total-expense").innerText = totalExpenses;
  document.getElementById("total-balance").innerText = totalBalance;
}
// saving section
function savingCal() {
  const totalBalanceInput = document.getElementById("total-balance");
  const totalValue = parseFloat(totalBalanceInput.innerText);
  const saveInput = document.getElementById("saving-input");
  const saveValue = parseFloat(saveInput.value);

  const saving = (totalValue * saveValue) / 100;
  if (totalValue >= saving) {
    document.getElementById("save-money").innerText = saving;
    document.getElementById("total-remain").innerText = totalValue - saving;
  } else {
    alert("your have not enough money to save!!");
  }
}

//alert bar
function alert(message) {
  document.getElementById("alertBar").style.display = "block";
  const alertText = (document.getElementById("message").innerText = message);

  autoCloseAlert();
}

function autoCloseAlert() {
  setTimeout(function () {
    document.getElementById("alertBar").style.display = "none";
  }, 3000);
}
