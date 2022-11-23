
//login btn handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
  const loginArea = document.getElementById('login-area');
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block"
})

const depositeButton = document.getElementById("addDeposite");
depositeButton.addEventListener("click", function(){
  const depositeAmount = document.getElementById("depositeAmount").value;
  const depositeAmountNumber = parseFloat(depositeAmount);

  updateSpanText("currentDeposite",depositeAmountNumber)

  updateSpanText("currentBalance", depositeAmountNumber)

  document.getElementById("depositeAmount").value = "";

})

function updateSpanText (id, depositeAmountNumber){
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current)

  const totalBalance = currentNumber + depositeAmountNumber;

  document.getElementById(id).innerText = totalBalance;
}

const withdrawButton = document.getElementById("withdrawButton");
withdrawButton.addEventListener("click", function(){
  const inputWithdraw = document.getElementById("inputWithdraw").value;
  inputWithdrawNumber = parseFloat(inputWithdraw)


  updateSpanText("totalWithdraw", inputWithdrawNumber)

  document.getElementById("inputWithdraw").value = "";
})

const totalAfterWithdrow = document.getElementById("withdrawButton");
totalAfterWithdrow.addEventListener("click", function(){
  const balanceNumber = document.getElementById("currentBalance").innerText;
  const balanceFloat = parseFloat(balanceNumber);

  const final = balanceFloat - inputWithdrawNumber; 

  document.getElementById("currentBalance").innerText = final;
}) 
