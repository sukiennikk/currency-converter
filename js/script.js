let formElement = document.querySelector('.js-form');
let amountElement = document.querySelector('.js-amount');
let currencyElement = document.querySelector('.js-currency');
let resultElement = document.querySelector('.js-result');

const rateEUR = 4.19;
const rateUSD = 3.84;

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case 'EUR':
            result = (amount / rateEUR).toFixed(2);
            break;

        case 'USD':
            result = (amount / rateUSD).toFixed(2);
            break;
    }

    resultElement.innerHTML = `${amount} PLN = ${result} ${currency}`;

});

function myFunction() {
    var zmienna = 5;
    console.log(zmienna);
}

myFunction();