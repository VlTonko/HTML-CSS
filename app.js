const outputText = document.querySelector('.outputValue');
const btnGenerate = document.querySelector('.generate');
const btnReset = document.querySelector('.reset');
const minimunValue = document.getElementById('minValue');
const maximumValue = document.getElementById('maxValue');
const arrValues = [];

btnReset.addEventListener('click', reset);
btnGenerate.addEventListener('click', validation);

function validation() {
  if (Number(maximumValue.value) > Number(minimunValue.value) && Number(minimunValue.value) !== 0 && Number(minimunValue.value) > 0 && Number(maximumValue.value) > 0) {
    outputRandomValueObject();
  } else {
    outputText.style.color = '#f00';
    outputText.innerText = 'Enter correct value!';
    setTimeout(reset, 1000);
  }
}

function outputRandomValueObject() {
  let randomValue = getRandomNum();
  if (arrValues.length === Number(maximumValue.value) - Number(minimunValue.value) + 1) {
    outputText.innerText = 'All numbers are generated';
    btnGenerate.setAttribute('disabled', 'disabled');
    return;
  } else if (arrValues.includes(randomValue)) {
    outputRandomValueObject();
  } else {
    arrValues.push(randomValue);
    console.log(arrValues);
    outputText.innerText = 'Generated number ' + randomValue;
  }
}

function getRandomNum() {
  let minValue = Number(minimunValue.value);
  let maxValue = Number(maximumValue.value);
  return Math.floor(minValue + Math.random() * (maxValue - minValue + 1));
}

function reset() {
  maximumValue.value = null;
  minimunValue.value = null;
  btnGenerate.removeAttribute('disabled');
  outputText.style.color = '#000';
  outputText.innerText = 'Generated number:';
  arrValues.length = 0;
  console.log('Reset');
}
