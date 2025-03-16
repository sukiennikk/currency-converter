{

const calculateResult = (amount, currency) => {
    
 const rateEUR = 4.19;
 const rateUSD = 3.84;

    switch (currency) {
        case 'EUR':
            return (amount / rateEUR).toFixed(2);


        case 'USD':
            return (amount / rateUSD).toFixed(2);

    }
 };

const updateResultText = (amount, result, currency) => {
     const resultElement = document.querySelector('.js-result');
    resultElement.innerHTML = `${amount} PLN = ${result} ${currency}`;
    
}

 const onFormSubmit = (event) => {
    event.preventDefault();

 const amountElement = document.querySelector('.js-amount');
 const currencyElement = document.querySelector('.js-currency');

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
};


 const init = () => {
    const formElement = document.querySelector('.js-form');

 formElement.addEventListener('submit', onFormSubmit);
 };

init();

}