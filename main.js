// Input card owner
const inputCardOwner = document.querySelector('#inputCardOwner');
const cardOwner = document.querySelector('#cardOwner');

// Input card number
const inputCardNumber = document.querySelector('#inputCardNumber');
const cardNumber = document.querySelector('#cardNumber');

// Input month
const cardMonth = document.querySelector('#cardMonth');
const monthSelect = document.querySelector('#monthSelect');

// Input year
const yearSelect = document.querySelector('#yearSelect');
const cardYear = document.querySelector('#cardYear');

// Input CVC
const inputCVC = document.querySelector('#inputCVC');
const cvc = document.querySelector('.cvc');

const toggleCVC = (element) => {
  if(element.target.value.length <= 3) {
    let value = element.target.value;
    const lengthCVC = 3 - value.length;
    for(let i = 0; i < lengthCVC; i++) {
      value = "X" + value;
    }
  
    cvc.innerText = value;
  } else {
    element.target.value = element.target.value.slice(0,3);
  }
}

const toggleCardOwner = (element) => {
  if(element.target.value.length !== 0) {
    let value = element.target.value;
    cardOwner.innerText = value;
  } else {
    cardOwner.innerText = "Oscar Jiménez";
  }
}

const toggleCardNumber = (element) => {
  if(element.target.value.length !== 0) {
    let value = element.target.value;
    cardNumber.innerText = value;
  } else {
    cardNumber.innerText = "0000 0000 0000 0000";
  }
}

const toggleCardMonth = (element) => {
  let value = element.target.value;
  cardMonth.innerText = value;
}

const toggleCardYear = (element) => {
  cardYear.innerText = element.target.value;
}

for(let month = 1; month <= 12; month++) {
  const option = document.createElement('option');
  const stringMonth = `${month}`;
  if(stringMonth.length < 2) {
    option.value = `0${month}`;
  } else {
    option.value = `${month}`;
  }
  option.innerText = option.value;
  monthSelect.appendChild(option);
}

for(let year = 0; year <= 99; year++) {
  const option = document.createElement('option');
  const stringYear = `${year}`;
  if(stringYear.length < 2) {
    option.value = `0${year}`;
  } else {
    option.value = `${year}`;
  }
  option.innerText = option.value;
  yearSelect.appendChild(option);
}

inputCardOwner.addEventListener('input', toggleCardOwner);
inputCardNumber.addEventListener('input', toggleCardNumber);
monthSelect.addEventListener('change', toggleCardMonth);
yearSelect.addEventListener('change', toggleCardYear);
inputCVC.addEventListener('input', toggleCVC);
