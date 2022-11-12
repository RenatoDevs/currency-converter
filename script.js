const button = document.querySelector('.convert-button');
const select = document.querySelector('#select-currency');
const inputReal = document.querySelector('#input-real');

/* fixed values for currencies*/

const usd = 5.17;
const eur = 5.19;
const btc = 90936.59;

/* dola */


const buttonError = () =>{
    button.className = 'convert-button error';
    inputReal.className = 'input-real error';
    
}
const buttonSuccess = () =>{
    button.className = 'convert-button success';
    inputReal.className = 'input-real';
}

const convertCurrency = () => {
    const valueReal = inputReal.value;
    const realValueText = document.querySelector('#real-value-text');
    const currencyValueText = document.querySelector('#currency-value-text');
    let selectValue = select.value;
    if (valueReal === '') {
        buttonError();
        return
    } else {
        buttonSuccess();
        realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valueReal);

        switch (selectValue) {
            case 'usd':
                currencyValueText.innerHTML = new Intl.NumberFormat('es-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(valueReal / usd)
                break;
            case 'eur':
                currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR'
                }).format(valueReal / eur)
                break;
            case 'btc':
                currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'BTC'
                }).format(valueReal / btc)
                break;
            default:
                return;
        }
    }
}
const changeCurrency = () => {
    const currencyName = document.querySelector('#currency-name');
    const currencyImg = document.querySelector('#currency-img');
    let selectValue = select.value;
    switch (selectValue) {
        case 'usd':
            currencyImg.src = './assets/images/usd.png';
            currencyName.innerHTML = 'Dólar';
            break;
        case 'eur':
            currencyImg.src = './assets/images/eur.png';
            currencyName.innerHTML = 'Euro';
            break;
        case 'btc':
            currencyImg.src = './assets/images/btc.png';
            currencyName.innerHTML = 'Bitcoin';
            break;
        default:
            return;
    }
    convertCurrency();
}
button.addEventListener('click', convertCurrency);
select.addEventListener('change', changeCurrency)
select.addEventListener('change', changeCurrency)