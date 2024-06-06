// TODO: this file! :)
// User input number
//The number bank is not changed if the user enters a non-numeric value.
//The number bank should display all the numbers the user has entered.

//When the "Sort 1" button is clicked, the first number in the number bank should be removed and
//placed into either the odd or even category.

// When the "Sort All" button is clicked, all the numbers in the number bank should be
//moved into either the odd or even category.

const numberInput = document.getElementById("number");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");
const addNumberButton = document.getElementById("form");
const oddNumbers = document.getElementById("odds");
const evenNumbers = document.getElementById("evens");
let numberBank = [];

function displayNumbers() {
  numberBank.innerHTML = numberBank.join(",");
  oddNumbers.innerHTML = oddNumbers.join(",");
  evenNumbers.innerHTML = evenNumbers.join(",");
}
addNumberButton.addEventListener("submit", () => {
  const num = numberInput.value;
  if (!isNaN(num) && num.trim() !== "") {
    numberBank.push(Number(num));
    displayNumbers();
  }
  numberInput.value = "";
});

// After Numbers are displayed sort them in categories of even or odd

function sortNumber(num) {
  if (num / 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }
}

sortOneButton.addEventListener("click", () => {
  if (numberBank.length > 0) {
    const num = numberBank();
    sortNumber(num);
    displayNumbers();
  }
});

sortAllButton.addEventListener("click", () => {
  while (numberBank.length > 0) {
    const num = numberBank();
    sortNumber(num);
  }
  displayNumbers();
});
