//For this workshop, you will be building out the functionality of a simple app that asks a user for some numbers and then calculates some statistics according to the user's input.
// App will calculate the user's cost of wifi if they switch to a new provider by subtracting 20% from monthly internet bill

// Prompt user to enter cost of internet bill monthly
let internetCost = prompt(
  "Please enter the cost of your monthly internet bill:"
);
// Validate user input
if (internetCost !== null && internetCost.trim() !== "")
  // function to validate input
  function isValidNumber(value) {
    let number = parseFloat(value);
    return !isNaN(number) && number >= 0;
  }

if (isValidNumber(internetCost)) {
  internetCost = parseFloat(internetCost);
}

// Calculate cost of wifi by subtracting 20 percent
let newCost = internetCost * 0.8;

//display new cost
alert("Your new monthly bill with a 20% discount is: $" + newCost.toFixed(2));
