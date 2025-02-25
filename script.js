const exchangeRates = {
    USD: { USD: 1, INR: 83.2, EUR: 0.92, GBP: 0.79 },
    INR: { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0095 },
    EUR: { EUR: 1, USD: 1.09, INR: 89.8, GBP: 0.86 },
    GBP: { GBP: 1, USD: 1.27, INR: 104.6, EUR: 1.16 }
};

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");

// Populate currency dropdowns
function loadCurrencies() {
    const currencies = Object.keys(exchangeRates);
    currencies.forEach(currency => {
        let option1 = new Option(currency, currency);
        let option2 = new Option(currency, currency);
        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
    });

    fromCurrency.value = "USD";
    toCurrency.value = "INR";
}

// Convert currency using predefined exchange rates
function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = parseFloat(amount.value);

    if (isNaN(amountValue) || amountValue <= 0) {
        result.textContent = "Please enter a valid amount.";
        return;
    }

    const rate = exchangeRates[from][to];
    const convertedAmount = (amountValue * rate).toFixed(2);
    result.textContent = `${amountValue} ${from} = ${convertedAmount} ${to}`;
}

// Load currencies on page load
loadCurrencies();
