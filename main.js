// Input card owner
const inputCardOwner = document.querySelector('#inputCardOwner');

// Input card number
const inputCardNumber = document.querySelector('#inputCardNumber');

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

inputCVC.addEventListener('input', toggleCVC)
