//expense section
function expenseCal() {
  //income
  const incomeInput = document.getElementById("income-input");
  const incomeValue = parseInt(incomeInput.value);
  if (incomeValue < 0 || isNaN(incomeValue)) {
    alert("your income input is not valid");
    return false;
  }
  //food
  const foodInput = document.getElementById("food-input");
  const foodValue = parseInt(foodInput.value);
  if (foodValue < 0 || isNaN(foodValue)) {
    alert("your Food input is not valid");
    return false;
  }
  //rent
  const rentInput = document.getElementById("rent-input");
  const rentValue = parseInt(rentInput.value);
  if (rentValue < 0 || isNaN(rentValue)) {
    alert("your Rent input is not valid");
    return false;
  }
  //cloths
  const clothInput = document.getElementById("cloth-input");
  const clothsValue = parseInt(clothInput.value);
  if (clothsValue < 0 || isNaN(clothsValue)) {
    alert("your Cloths input is not valid");
    return false;
  }

  //calulation
  const totalExpenses = foodValue + rentValue + clothsValue;
  const totalBalance = incomeValue - totalExpenses;
  if (totalExpenses > incomeValue) {
    alert("your expenses is more than your income");
    return false;
  }
  document.getElementById("total-expense").innerText = totalExpenses;
  document.getElementById("total-balance").innerText = totalBalance;
  document.getElementById("total-remain").innerText = "";
}

// saving section
function savingCal() {
  debugger;
  const incomeInput = document.getElementById("income-input");
  const incomeValue = parseInt(incomeInput.value);
  const totalBalanceInput = document.getElementById("total-balance");
  const totalValue = parseFloat(totalBalanceInput.innerText);
  const saveInput = document.getElementById("saving-input");
  const saveValue = parseFloat(saveInput.value);

  const saving = (incomeValue * saveValue) / 100;

  if (incomeValue >= saving || totalValue >= saving) {
    document.getElementById("save-money").innerText = saving;
    document.getElementById("total-remain").innerText = incomeValue - saving;
    saveInput.value = "";
    if (totalValue > 0) {
      document.getElementById("total-remain").innerText = totalValue - saving;
    }
  } else {
    alert("your have not enough money to save!!");
    saveInput.value = "";
    if (isNaN(saveValue)) {
      alert("null value is not allowed");
    }
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
