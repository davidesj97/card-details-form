// Input card owner
const inputCardOwner = document.querySelector('#inputCardOwner');
const cardOwner = document.querySelector('#cardOwner');

// Input card number
const inputCardNumber = document.querySelector('#inputCardNumber');
const cardNumber = document.querySelector('#cardNumber');

// Input month
const inputMonth = document.querySelector('#inputMonth');

// Input year
const inputYear = document.querySelector('#inputYear');

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

inputCardOwner.addEventListener('input', toggleCardOwner);
inputCardNumber.addEventListener('input', toggleCardNumber);
inputCVC.addEventListener('input', toggleCVC);
