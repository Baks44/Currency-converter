 {
    const welcome = () => {
    console.log("Witaj na mojej stronie.");
}
welcome();
 
const calculateResult = (currency, exchange) => {
    const rateEUR = 4.45;
    const rateUSD = 4.07;
    const rateGBP = 5.17;
    const rateCHF = 4.55;
    const rateNOK = 0.38;

    switch (exchange) {
        case "USD":
            return currency / rateUSD;

        case "EUR":
            return currency / rateEUR;

        case "GBP":
            return currency / rateGBP;

        case "CHF":
            return currency / rateCHF;

        case "NOK":
            return currency / rateNOK;

    }
};
calculateResult ();

const updateResultText = (currency,result, exchange) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${currency.toFixed(2)} PLN to <strong>${result.toFixed(2)
    } ${ exchange }
    </strong > `;
}

const onFormSubmit =  (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-currency");
    const exchangeElement = document.querySelector(".js-exchange");
    

    const currency = +currencyElement.value;
    const exchange = exchangeElement.value;

    const result = calculateResult(currency, exchange);

   updateResultText(currency,result, exchange);
    }

   const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
    };

    init();  

  } 