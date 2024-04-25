//api for currency change

const api = "https://api.exchangerate-api.com/v4/latest/USD";

//for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo:
var searchValue;

//event when currency is changed
fromCurrency.addEventListener('change',(event) => {
  resultFrom = `${event.target.value}`;
});

//event when currency is changed
toCurrency.addEventListener('change',(event) => {
  resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

//function for updating value
function updateValue(e) {
  searchValue = e.target.value;
}

//when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

//function getresults
function getResults(){
  fetch(`${api}`)
    .then(currency => {
        return currency.json();
    }).then(displayResults);
}

//display results after conversion
function displayResults(currency){
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValue.innerHTML = 
    ((toRate / fromRate) * searchValue).toFixed(2);
  finalAmount.style.display = "block";
}

//user clicks on reset button
function clearVal(){
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
};

