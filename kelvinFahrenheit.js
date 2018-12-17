// Temperature in kelvin stored in variable `kelvin`
// var kelvinTemp = 301;

// temperature in celsius stored in variable `celsius`
// var celsiusTemp = kelvinTemp - 273.15;

// convert celsius to fahrenheit stored in variable `fahrenheit`
// var fahrenheitTemp = celsiusTemp * (9/5) + 32;

// round the value of fahrenheit down and assign to `fahrenheit`
// fahrenheitTemp = Math.floor(fahrenheitTemp);

// use string concatenation to leave a message
// "The temperature is `fahrenheit` degrees Fahrenheit."
// console.log('The temperature is ' + fahrenheitTemp + ' degrees Fahrenheit.');

let userTemp = document.getElementById("conTemp").value;
let userTempTo = document.getElementById("conTemp2").value;

let form = document.querySelector('form');
let buttonConvert = document.querySelector('convertTemp');
let buttonClear = document.querySelector('clearAll');
let input = document.getElementById('userInput');
let userOutput  = document.getElementById('userOutput');

let fahrenheitTemp = input;
let celsiusTemp = input;
let kelvinTemp = input;

form.addEventListener('submit', function(e){
  e.preventDefault();
  todoConvert(e.value);
});

// buttonConvert.addEventListener('clicked', function(e){
//   e.preventDefault();
//   todoConvert(e.value);
// });
let tempClear = function(){
localStorage.clear();
  userInput = '';
  userOutput = 'Calculating';

}

let tempConvert = function(){
  const inputValue = input.value;
  switch (userTemp != userTempTo) {
    case userTemp == 'kelvin' && userTempTo == 'celsius':
        celsiusTemp = inputValue - 273.15;
        celsiusTemp = Math.floor(celsiusTemp);
        userOutput.innerHTML = celsiusTemp;
      break;
    case userTemp == 'kelvin' && userTempTo == 'fahrenheit':
        celsiusTemp = inputValue - 273.15;
        fahrenheitTemp = celsiusTemp * (9/5) + 32;
        fahrenheitTemp = Math.floor(fahrenheitTemp);
        userOutput.innerHTML = fahrenheitTemp;
      break;
    case userTemp == 'celsius' && userTempTo == 'kelvin':
        kelvinTemp = inputValue + 273.15;
        kelvinTemp = Math.floor(kelvinTemp);
        userOutput.innerHTML = kelvinTemp;
      break;
    case userTemp == 'celsius' && userTempTo == 'fahrenheit':
        fahrenheitTemp = inputValue * (9/5) + 32;
        fahrenheitTemp = Math.floor(fahrenheitTemp);
        userOutput.innerHTML = fahrenheitTemp;
      break;
    case userTemp == 'fahrenheit' && userTempTo == 'celsius':
        celsiusTemp = inputValue * (9/5) + 32;
        celsiusTemp = Math.floor(celsiusTemp);
        userOutput.innerHTML = celsiusTemp;
      break;
    case userTemp == 'fahrenheit' && userTempTo == 'kelvin':
        celsiusTemp = inputValue * (9/5) + 32;
        kelvinTemp = celsius + 273.15;
        kelvinTemp = Math.floor(kelvinTemp);
        userOutput.innerHTML = kelvinTemp;
      break;
    default:
      alert('Please select a different secondary temperature.')
  }
}
