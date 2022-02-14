function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const stringPin = pin + ""; // for finding length of this element
  if (stringPin.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("outPutValue").value = pin;
}
document.getElementById("key-pad").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const calcInput = document.getElementById("key-input");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
    if (number == "<") {
      calcInput.value = calcInput.value.slice(0, -1);
    }
  } else {
    document.getElementById("key-input").value += number;
  }
});
function verifyId() {
  console.log("cliccked");
  const pin = document.getElementById("outPutValue").value;
  const typeNumber = document.getElementById("key-input").value;

  const successNoti = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  if (pin == typeNumber) {
    successNoti.style.display = "block";
    failError.style.display = "none";
  } else {
    failError.style.display = "block";
    successNoti.style.display = "none";
  }
}
