/********** TASK 1 ************/
const compareButton = document.querySelector("#compare_form button");
compareButton.addEventListener("click", () => compareNums());

function compareNums() {
  const firstNum = document.getElementById("compareFirstNum").value;
  const secondNum = document.getElementById("compareSecondNum").value;
  let resultDiv = document.querySelector(".compare-result");

  if (firstNum === secondNum) {
    console.log("BOOM");
    resultDiv.innerHTML = "BOOM";
  } else {
    console.log("TRY AGAIN");
    resultDiv.innerHTML = "TRY AGAIN";
  }
}

/********** TASK 2 ************/
const addButton = document.querySelector("#add_form button");
addButton.addEventListener("click", () => addNums());

function addNums() {
  const firstNum = document.getElementById("addFirstNum").value;
  const secondNum = document.getElementById("addSecondNum").value;
  let resultDiv = document.querySelector(".add-result");
  let result = Number(firstNum) + Number(secondNum);
  console.log(result);
  resultDiv.innerHTML = result;
}

/********** TASK 3 ************/
const mulButton = document.querySelector("#mul_form button");
mulButton.addEventListener("click", () => mulNums());

function mulNums() {
  const firstNum = document.getElementById("mulFirstNum").value;
  const secondNum = document.getElementById("mulSecondNum").value;
  let resultDiv = document.querySelector(".mul-result");
  let result = Number(firstNum) * Number(secondNum);
  console.log(result);
  resultDiv.innerHTML = result;
}

/********** TASK 4 ************/

const daySelect = document.querySelector("#dayNumber");
let dayResultDiv = document.querySelector(".day-result");
daySelect.addEventListener("change", () => {
  let daySelected = daySelect.value;

  switch (daySelected) {
    case "1":
      console.log("good week");
      dayResultDiv.innerHTML = "good week";
      break;
    case "2":
    case "3":
    case "4":
      console.log("good day");
      dayResultDiv.innerHTML = "good day";
      break;
    case "5":
    case "6":
    case "7":
      console.log("happy weekend!");
      dayResultDiv.innerHTML = "happy weekend!";
      break;
  }
});

/********** TASK 5 ************/
const monthInput = document.querySelector("#monthNum");

let monthResultDiv = document.querySelector(".month-result");

monthInput.addEventListener("input", () => {
  let monthNumber = monthInput.value;
  if (monthNumber == 1) {
    console.log("good month");
    monthResultDiv.innerHTML = "good month";
  } else if (monthNumber >= 2 && monthNumber <= 10) {
    console.log("start work");
    monthResultDiv.innerHTML = "start work";
  } else if (monthNumber >= 11 && monthNumber <= 20) {
    console.log("get salary");
    monthResultDiv.innerHTML = "get salary";
  } else if (monthNumber >= 21 && monthNumber <= 30) {
    console.log("the end");
    monthResultDiv.innerHTML = "the end";
  } else if (monthNumber == 31) {
    console.log("BOOM BOOM");
    monthResultDiv.innerHTML = "BOOM BOOM";
  } else {
    console.log("Invalid month number");
    monthResultDiv.innerHTML = "Invalid month number";
  }
});

/********** TASK 6 ************/
const holidayInput = document.querySelector("#holidayName");
let holidayResultDiv = document.querySelector(".holiday-result");

holidayInput.addEventListener("input", () => {
  let holidayName = holidayInput.value;
  switch (holidayName) {
    case "purim":
      console.log("happy purim");
      holidayResultDiv.innerHTML = "happy purim";
      break;
    case "passover":
      console.log("clear home");
      holidayResultDiv.innerHTML = "clear home";
      break;
    case "shavoout":
      console.log("eat milk");
      holidayResultDiv.innerHTML = "eat milk";
      break;
    case "suckot":
      console.log("build sucka");
      holidayResultDiv.innerHTML = "build sucka";
      break;
  }
});
