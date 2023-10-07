console.log("Witaj na mojej stronie.");

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let exchangeElement = document.querySelector(".js-exchange");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.45;
let rateUSD = 4.07;
let rateGBP = 5.17;
let rateCHF = 4.55;
let rateNOK = 0.38;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = +currencyElement.value;
    let exchange = exchangeElement.value;
    let result;

    switch (exchange) {
        case "USD":
            result = currency / rateUSD;
            break;
        case "EUR":
            result = currency / rateEUR;
            break;
        case "GBP":
            result = currency / rateGBP;
            break;
        case "CHF":
            result = currency / rateCHF;
            break;
        case "NOK":
            result = currency / rateNOK;
            break;
    }

    resultElement.innerHTML = `${currency.toFixed(2)} PLN to <strong>${result.toFixed(2)} ${exchange}
    </strong>`;
});