const input = document.querySelector('input');
input.value = localStorage.getItem('input');
const lowerCase = document.querySelector('.lower-case');
const upperCase = document.querySelector('.upper-case');
const camelCase = document.querySelector('.camel-case');
const pascal = document.querySelector('.pascal-case');
const snake = document.querySelector('.snake');
const kebab = document.querySelector('.kebab');
const trim = document.querySelector('.trim');


localStorage.setItem('input', 'this is a normal text to transform');

addInputEvent();

function addInputEvent() {
  lowerCase.innerHTML = input.value.toLowerCase();
  upperCase.innerHTML = input.value.toUpperCase();
  camelCase.innerHTML = toCamel(input.value.trim());
  pascal.innerHTML = toPascalCase(input.value);
  snake.innerHTML = snakeMessage(input.value);
  kebab.innerHTML = kebabMessage(input.value);
  trim.innerHTML = trimMessage(input.value);

}

input.addEventListener('input', addInputEvent);

function toCamel(names) {
  let newArray = [];
  let split = names.split(' ');
  let arrayAt0;
  for (let i = 0; i<split.length; i++) {
    
     if (split[i] === split[0]) {
      arrayAt0 = split[0].charAt(0).toLowerCase() + split[0].substring(1);
    } else {
      if(!split[i]) {
        continue;
      } else {
        newArray.push(split[i][0].toUpperCase() + split[i].substring(1));
      }
    }
    
   
 }

 newArray.unshift(arrayAt0);
  const string = newArray.join('');
  return string;
}



function toPascalCase(names) {

  let newArray = [];
  let split = names.split(' ');


  for (let i = 0; i<split.length; i++) {
    if (!split[i]) {
      continue;
    } else {
      newArray.push(split[i][0].toUpperCase() + split[i].substring(1));
    }
   
 }

  const string = newArray.join('');
  return string;
}



function snakeMessage(input) {

  let newArray = [];
  let split = input.split(' ');


  for (let i = 0; i<split.length; i++) {
    if (!split[i]) {
      continue;
    } else {
      newArray.push(split[i]);
    }
   
 }

  const string = newArray.join('_');
  return string;
}



function kebabMessage(input){
  let newArray = [];
  let split = input.split(' ');


  for (let i = 0; i<split.length; i++) {
    if (!split[i]) {
      continue;
    } else {
      newArray.push(split[i]);
    }
   
 }

  const string = newArray.join('-');
  return string;
}



function trimMessage(input) {

  const inputValue = input;
  const trimmedMessage = inputValue.split(' ').join('');
  return trimmedMessage;
}


const fullName = 'sajid ahmed is learning to code';
const split = fullName.split(' ');

const string = split[0].charAt(0).toUpperCase() + split[0].substring(1) + ' ' + split[1].toUpperCase();




