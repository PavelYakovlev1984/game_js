"use strict";
// console.log('components');
// document.querySelector('.check').addEventListener('click', function() {
//   console.log(document.querySelector('.number-input').value);
// })
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
  // console.log(document.querySelector('.number-input').value);
  // document.querySelector('.guess-message').textContent = 'Правильно!';
  let guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  if(!guessingNumber){
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if(secretNumber === guessingNumber){
    document.querySelector('.guess-message').textContent = 'Правильно!';
  } else if(guessingNumber > secretNumber){
    document.querySelector('.guess-message').textContent = 'Слишком много!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else if(guessingNumber < secretNumber){
    document.querySelector('.guess-message').textContent = 'Слишком мало!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  }
})

