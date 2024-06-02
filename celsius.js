// convert temperature from fahrenheit to celsius
// return celsius
// if statements based on fahrenheit number
// ask professor about line 23 not sure of the importance
//fahrenheitToCelsius function requires the input of fahrenheit
// output is then the Fahrenheit previously added and the new celsius calculation

function fahrenheitToCelsius(fahrenheit) {
  let celsius = fahrenheit - (32 * 5) / 9;
  return celsius;
}
console.log("Celsius");
function createMessage(fahrenheit, celsius) {
  let message = "";

  if (fahrenheit >= 80) {
    message = "It's hot and humid today.";
  } else if (fahrenheit === 65) {
    message = "The Perfect Spring Weather";
  } else if (fahrenheit === 55) {
    message = "Grab your jacket!";
  }
  return `${fahrenheit} fahrenheit is ${celsius} celsius. ${message}`;
}
function rand(limit) {
  return Math.round(Math.random() * limit);
}
let inputFahrenheit = prompt("Number will be converted to Celsius");

let fahrenheitToCelsiusResult = fahrenheitToCelsius(inputFahrenheit);
let output = createMessage(inputFahrenheit, fahrenheitToCelsiusResult);
console.log(output);

